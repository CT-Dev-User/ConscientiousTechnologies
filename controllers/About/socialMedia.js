import cloudinary from '../../cloudinary.js';
import socialMediaModel from '../../Models/About/socialMediaModels.js';

export const addSocialMediaData = async (req, res) => {
    try {
        const uploadResult = await cloudinary.v2.uploader.upload(req.file.path)
        const { title, link } = req.body;
        const social_icon = uploadResult.secure_url;

        const newData = new socialMediaModel ({
            title, social_icon, link
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

export const getSocialMediadata = async (req, res) => {
    try {
        const getdata = await socialMediaModel.find({}).sort({ createdAt: -1 });
        res.status(200).send({
            message: "all  data get successfully", getdata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });

    }

}

export const editSocialMediadata = async (req, res) => {
    try {
        const { id } = req.params;
        let social_icon = null;
        if (req.file) {
            const uploadResult = await cloudinary.v2.uploader.upload(req.file.path);
            social_icon = uploadResult.secure_url;
        }
        const { title, link } = req.body;
        const updateObject = {};
        if (title) {
            updateObject.title = title;
        }
        if (link) {
            updateObject.link = link;
        }
       
        if (social_icon) {
            updateObject.social_icon = social_icon;
        }
        const updatedata = await socialMediaModel.findByIdAndUpdate(
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

export const deleteSocialMediadata = async (req, res) => {
    try {
        const { id } = req.params;
        await socialMediaModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
