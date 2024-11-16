import reliableToolsModel from "../../Models/ReliableToolModel/ReliableToolModel.js";
import cloudinary from "../../cloudinary.js";
import fs from "fs";


export const addReliableToolsData = async (req, res) => {
  try {
    const { category, Subcategory, technology, subTech, techLogoIndex } = req.body;
    let parsedSubTech;
    let techLogoIndices;

    if (subTech) {
      try {
        parsedSubTech = JSON.parse(subTech);
      } catch (err) {
        return res.status(400).json({ message: "Invalid subTech format" });
      }
    }

    if (techLogoIndex) {
      try {
        techLogoIndices = JSON.parse(techLogoIndex);
      } catch (parseError) {
        return res.status(400).json({ message: "Invalid techLogoIndex format" });
      }
    }
    parsedSubTech.forEach((subTechItem) => {
      if (!subTechItem.techLogos) {
        subTechItem.techLogos = [];
      }
    });

    if (req.files && req.files.length > 0 && techLogoIndices.length > 0) {
      await Promise.all(
        techLogoIndices.map(async ({ subTechIndex, logoIndex }, index) => {
          if (req.files[index]) {
            const result = await cloudinary.v2.uploader.upload(req.files[index].path);
            if (!parsedSubTech[subTechIndex].techLogos[logoIndex]) {
              parsedSubTech[subTechIndex].techLogos[logoIndex].logo = {};
            }
            parsedSubTech[subTechIndex].techLogos[logoIndex].logo = result.secure_url;
            await fs.promises.unlink(req.files[index].path);
          }
        })
      );
    }

    const newReliableTool = new reliableToolsModel({
      category,
      Subcategory,
      technology,
      subTech: parsedSubTech,
    });

    const savedData = await newReliableTool.save();

    res.status(200).json({
      success: true,
      message: "Data added successfully",
      data: savedData,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to add data. Please try again later." });
  }
};
export const editReliableToolsData = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, Subcategory, technology, subTech } = req.body;
    const existingData = await reliableToolsModel.findById(id);
    if (!existingData) return res.status(404).json({ message: "Data not found" });

    const updateObject = {
      category: category || existingData.category,
      Subcategory: Subcategory || existingData.Subcategory,
      technology: technology || existingData.technology,
      subTech: existingData.subTech,
    };

    let parsedSubTech;
    if (subTech) {
      try {
        parsedSubTech = JSON.parse(subTech);
      } catch (err) {
        return res.status(400).json({ message: "Invalid subTech format" });
      }
    }

    let techLogoIndices;
    if (req.body.techLogoIndex) {
      try {
        techLogoIndices = JSON.parse(req.body.techLogoIndex);
      } catch (parseError) {
        return res.status(400).json({ message: "Invalid techLogoIndex format" });
      }
    }
    if (parsedSubTech) {
      updateObject.subTech = parsedSubTech.map((subTechItem, subTechIndex) => {
        const existingSubTechItem = existingData.subTech[subTechIndex] || {};
        return {
          ...existingSubTechItem,
          ...subTechItem,
          techLogos: existingSubTechItem.techLogos || [],
        };
      });
    }

    if (req.files && req.files.length > 0) {
      let fileIndex = 0;

      await Promise.all(
        techLogoIndices.map(async ({ subTechIndex, logoIndex }) => {
          if (
            updateObject.subTech[subTechIndex]?.techLogos[logoIndex] &&
            req.files[fileIndex]
          ) {
            const result = await cloudinary.v2.uploader.upload(req.files[fileIndex].path);
            updateObject.subTech[subTechIndex].techLogos[logoIndex].logo =
              result.secure_url;
            await fs.promises.unlink(req.files[fileIndex].path);
            fileIndex++;
          }
        })
      );

      await Promise.all(
        req.files.slice(fileIndex).map(async (file, idx) => {
          const subTechIndex = techLogoIndices[fileIndex]?.subTechIndex || 0;
          const result = await cloudinary.v2.uploader.upload(file.path);

          if (!updateObject.subTech[subTechIndex].techLogos) {
            updateObject.subTech[subTechIndex].techLogos = [];
          }
          updateObject.subTech[subTechIndex].techLogos.push({ logo: result.secure_url });
          await fs.promises.unlink(file.path);
        })
      );
    }

    const updatedData = await reliableToolsModel.findByIdAndUpdate(id, updateObject, {
      new: true,
    });

    res.status(200).json({
      message: "Data updated successfully",
      updatedData,
    });
  } catch (error) {
    res.status(500).json({ message: "File upload failed" });
  }
};

export const getReliableToolsData = async (req, res) => {
  try {
    const getData = await reliableToolsModel.find({});
    res.status(200).json({
      message: "All data retrieved successfully",
      data: getData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getReliableToolsBySubCategory = async (req, res) => {
  try {
    const { Subcategory, category } = req.params;
    const getDataBySubCategory = await reliableToolsModel.find({
      category,
      Subcategory,
    });
    res.status(200).json({
      message: "Subcategory data retrieved successfully",
      data: getDataBySubCategory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReliableToolsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const getDataByCategory = await reliableToolsModel.find({ category });
    res.status(200).json({
      message: "Category data retrieved successfully",
      data: getDataByCategory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReliableToolsData = async (req, res) => {
  try {
    const { id } = req.params;
    await reliableToolsModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
