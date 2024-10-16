import blogsModel from "../../Models/HomePage/blogsModel.js";
import cloudinary from "../../cloudinary.js";
import fs from 'fs'

export const addBlogsData = async (req, res) => {
    try {
        const { title, desc, } = req.body;
        const images = [];
        const uploadedFiles = req.files;
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }
        const newData = new blogsModel({
            title, desc, homePageBlogImage: images[0] || ""
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

export const getBlogData = async (req, res) => {
    try {
        const getData = await blogsModel.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All data get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const editBlogData = async (req, res) => {
    try {
        const { id } = req.params
        const { title, desc} = req.body;
        const images = [];
        const uploadedFiles = req.files;
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path)
            images.push(result.secure_url)
            fs.unlinkSync(file.path);
        }

        const blogById = await blogsModel.findById(id);
        if (!blogById) {
            return res.status(404).json({
                error: 'blog not found'
            })
        }
        blogById.title = title || blogById.title
        blogById.desc = desc || blogById.desc
        blogById.homePageBlogImage = images[0] || blogById.homePageBlogImage
      
        const saveData = await blogById.save()

        res.status(200).send({
            message: "Data updated Successfully",
            saveData
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deleteBlogData = async (req, res) => {
    try {
        const { id } = req.params;
        await blogsModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}