import reliableToolsModel from "../../Models/ReliableToolModel/ReliableToolModel.js";
import cloudinary from "../../cloudinary.js";
import fs from "fs";


export const addReliableToolsData = async (req, res) => {
  try {
    const { category, Subcategory, technology, subTech, techLogoIndex } = req.body;
    // Parse `subTech` and `techLogoIndex`
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

    // Ensure the subTech items contain the correct structure for techLogos
    parsedSubTech.forEach((subTechItem) => {
      if (!subTechItem.techLogos) {
        subTechItem.techLogos = [];
      }
    });

    // Process file uploads and assign each uploaded image to the correct position
    if (req.files && req.files.length > 0 && techLogoIndices.length > 0) {
      await Promise.all(
        techLogoIndices.map(async ({ subTechIndex, logoIndex }, index) => {
          if (req.files[index]) {
            const result = await cloudinary.v2.uploader.upload(req.files[index].path);
            
            // Make sure techLogos array exists at subTechIndex and assign URL at logoIndex
            if (!parsedSubTech[subTechIndex].techLogos[logoIndex]) {
              parsedSubTech[subTechIndex].techLogos[logoIndex].logo = {};
            }
            parsedSubTech[subTechIndex].techLogos[logoIndex].logo = result.secure_url;

            // Remove the local file after uploading
            await fs.promises.unlink(req.files[index].path);
          }
        })
      );
    }

    // Create a new document with the processed data
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
    console.error("Failed to add reliable tool data:", error.message);
    res.status(500).json({ message: "Failed to add data. Please try again later." });
  }
};
export const editReliableToolsData = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, Subcategory, technology, subTech } = req.body;

    // Retrieve the existing document to preserve current values
    const existingData = await reliableToolsModel.findById(id);
    if (!existingData) return res.status(404).json({ message: "Data not found" });

    const updateObject = {
      category: category || existingData.category,
      Subcategory: Subcategory || existingData.Subcategory,
      technology: technology || existingData.technology,
      subTech: existingData.subTech, // Start with existing subTech data
    };

    // Parse `subTech` and `techLogoIndex` if provided
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
        console.log("Parsed techLogoIndices:", techLogoIndices);
      } catch (parseError) {
        console.error("Failed to parse techLogoIndex:", parseError.message);
        return res.status(400).json({ message: "Invalid techLogoIndex format" });
      }
    }

    // Update or append subTech if it was provided
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

    // Handle file uploads and replace or append logos based on techLogoIndices
    if (req.files && req.files.length > 0) {
      let fileIndex = 0;

      await Promise.all(
        techLogoIndices.map(async ({ subTechIndex, logoIndex }) => {
          // Update existing logo if index is specified
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

      // Append remaining files to the end of techLogos
      await Promise.all(
        req.files.slice(fileIndex).map(async (file, idx) => {
          const subTechIndex = techLogoIndices[fileIndex]?.subTechIndex || 0;
          const result = await cloudinary.v2.uploader.upload(file.path);

          if (!updateObject.subTech[subTechIndex].techLogos) {
            updateObject.subTech[subTechIndex].techLogos = [];
          }

          // Append the new logo to the end of the techLogos array
          updateObject.subTech[subTechIndex].techLogos.push({ logo: result.secure_url });
          await fs.promises.unlink(file.path);
        })
      );
    }

    // Update the database entry with the merged data
    const updatedData = await reliableToolsModel.findByIdAndUpdate(id, updateObject, {
      new: true,
    });

    res.status(200).json({
      message: "Data updated successfully",
      updatedData,
    });
  } catch (error) {
    console.error("Update failed:", error.message);
    res.status(500).json({ message: "File upload failed" });
  }
};


// Get all reliable tools data
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

// Get reliable tools data by subcategory
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

// Get reliable tools data by category
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

// Delete reliable tool data
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
