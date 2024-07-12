import navbarModel from '../../Models/NavbarModel/NavbarModel.js';
import cloudinary from '../../cloudinary.js';

//Add Header Data
export const addNavbarData = async (req, res) => {
    try {
        const { navCategory, navSubcategory } = req.body;
        const newData = new navbarModel({
            navCategory, navSubcategory
        })
        const saveData = await newData.save();
        res.status(200).send({
            status: "Success",
            saveData
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//get header Data
export const getNavbardata = async (req, res) => {
    try {
        const getdata = await navbarModel.find({});
        res.status(200).send({
            message: "all  data get successfully", getdata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });

    }

}


//get header data by headercategory
export const getNavbarByCategory = async (req, res) => {
    try {
      const { navCategory } = req.params;
  
      // Construct the query object to find documents by category
      const getDataByHeaderCategory = await navbarModel.find({ navCategory });
        res.status(200).send({
          message: "Category retrieved successfully",
          data: getDataByHeaderCategory
        });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
  
//Update Headers Data
export const editNavbardata = async (req, res) => {
    try {
        const { id } = req.params;
        const { navCategory, navSubcategory } = req.body;
        const updateObject = {};
        if (navCategory) {
            updateObject.navCategory = navCategory;
        }
        if (navSubcategory) {
            updateObject.navSubcategory = navSubcategory;
        }

        const updatedata = await navbarModel.findByIdAndUpdate(
            { _id: id }, updateObject, { new: true }
        );
        res.status(200).send({
            message: "Data updated successfully",
            updatedata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//Delete herosection Data
export const deleteNavbardata = async (req, res) => {
    try {
        const { id } = req.params;
        await navbarModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
