import keyfeatureModel from "../../Models/HomePage/keyFeature.js";
import cloudinary from "../../cloudinary.js";
import fs from 'fs'

export const addKeyFeatureData = async (req, res) => {
    try {
        const { keyFeatureTitle, point_one_Title, point_one_Desc, point_two_Title, point_two_Desc, point_three_Title, point_three_Desc} = req.body;
        const uploadResult = await cloudinary.v2.uploader.upload(req.file.path)
        const keyFeatureImag = uploadResult.secure_url;

        const newData = new keyfeatureModel({
            keyFeatureTitle, point_one_Title, point_one_Desc, point_two_Title, point_two_Desc, point_three_Title, point_three_Desc, keyFeatureImag
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

export const getKeyFeaturedata = async (req, res) => {
    try {
        const getdata = await keyfeatureModel.find({}).sort({ createdAt: -1 });
        res.status(200).send({
            message: "all  data get successfully", getdata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });

    }

}

export const editKeyFeatureData = async (req, res) => {
    try {
        const { id } = req.params;
        let keyFeatureImag = null;
        if (req.file) {
            const uploadResult = await cloudinary.v2.uploader.upload(req.file.path);
            keyFeatureImag = uploadResult.secure_url;
        }
        const { keyFeatureTitle, point_one_Title, point_one_Desc, point_two_Title, point_two_Desc, point_three_Title, point_three_Desc } = req.body;
        const updateObject = {};
        if (keyFeatureTitle) {
            updateObject.keyFeatureTitle = keyFeatureTitle;
        }
        if (point_one_Title) {
            updateObject.point_one_Title = point_one_Title;
        }
        if (point_one_Desc) {
            updateObject.point_one_Desc = point_one_Desc;
        }
        if (point_two_Title) {
            updateObject.point_two_Title = point_two_Title;
        }
        if (point_two_Desc) {
            updateObject.point_two_Desc = point_two_Desc;
        }
        if (point_three_Title) {
            updateObject.point_three_Title = point_three_Title;
        }
        if (point_three_Desc) {
            updateObject.point_three_Desc = point_three_Desc;
        }
        if (keyFeatureImag) {
            updateObject.keyFeatureImag = keyFeatureImag;
        }
        const updatedata = await keyfeatureModel.findByIdAndUpdate(
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

export const deleteKeyFeatureData = async (req, res) => {
    try {
        const { id } = req.params;
        await keyfeatureModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}