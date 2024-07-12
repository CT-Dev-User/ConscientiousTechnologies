import HeaderModel from '../../Models/header/Header.js';
import cloudinary from '../../cloudinary.js';

//Add Header Data
export const addHeadersData = async (req, res) => {
    try {
        const uploadResult = await cloudinary.v2.uploader.upload(req.file.path)
        const { headerCategory, headerSubCategory, title,  subTitle } = req.body;
        const image = uploadResult.secure_url;

        const newData = new HeaderModel ({
            headerCategory, headerSubCategory, title, subTitle, image,
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
export const getHeadersdata = async (req, res) => {
    try {
        const getdata = await HeaderModel.find({});
        res.status(200).send({
            message: "all  data get successfully", getdata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });

    }

}

//get header data by headersubcategory
export const getHeaderBySubCategory = async (req, res) => {
    try {
        const { headerSubCategory } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataBySubCategory = await HeaderModel.find({ headerSubCategory: headerSubCategory });
            res.status(200).send({
                message: "header retrieved successfully",
                data: getDataBySubCategory
            });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//get header data by headercategory
export const getHeaderByCategory= async (req, res) => {
    try {
        const { headerCategory } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataByheaderCategory = await HeaderModel.find({headerCategory: headerCategory });

            res.status(200).send({
                message: "header retrieved successfully",
                data: getDataByheaderCategory
            });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


//get data by category and subcategory

export const getHeaderByCategorySubCategory = async (req, res) => {
    try {
        const { headerCategory, headerSubCategory } = req.params;
        const getDataByheaderCategory = await HeaderModel.find({ headerCategory, headerSubCategory });

            res.status(200).send({
                message: "Header retrieved successfully",
                data: getDataByheaderCategory
            });
        
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


//Update Headers Data
export const editHeadersdata = async (req, res) => {
    try {
        const { id } = req.params;
        let image = null;
        if (req.file) {
            // If a file is uploaded, update the image
            const uploadResult = await cloudinary.v2.uploader.upload(req.file.path);
            image = uploadResult.secure_url;
        }
        const { headerCategory, headerSubCategory, title,  subTitle } = req.body;
        const updateObject = {};
        if (headerCategory) {
            updateObject.headerCategory = headerCategory;
        }
        if (headerSubCategory) {
            updateObject.headerSubCategory = headerSubCategory;
        }
        if (title) {
            updateObject.title = title;
        }
        if (subTitle) {
            updateObject.subTitle = subTitle;
        }
        if (image) {
            updateObject.image = image;
        }
        const updatedata = await HeaderModel.findByIdAndUpdate(
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
export const deleteHeadersdata = async (req, res) => {
    try {
        const { id } = req.params;
        await HeaderModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
