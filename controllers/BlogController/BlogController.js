import BlogModel from "../../Models/Blogs/BlogModel.js";
import cloudinary from "../../cloudinary.js";
import fs from 'fs'

export const addBlogData = async (req, res) => {
    try {
        console.log(req.body)
        const { heading, subHeading, blogData, blogTags } = req.body;
        const images = [];
        const uploadedFiles = req.files;
        console.log(uploadedFiles)
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }
        const parsedBlogData = JSON.parse(blogData);

        // Process blogData and blogTags from request body
        const blogDataArray = parsedBlogData.map(item => ({
            blogTitle: item.blogTitle,
            blogDesc: item.blogDesc
        }));

        const blogTagsArray = blogTags.split(',').map(tag => ({
            tags: tag.trim()
        }));

        // Create a new instance of BlogModel
        const newData = new BlogModel({
            heading,
            subHeading,
            homeImg: images[0],
            headerImg: images[1],
            blogData: blogDataArray,
            blogTags: blogTagsArray
        });
        // Save data to the database
        const saveData = await newData.save();

        // Send success response with saved data
        res.status(200).send({
            status: "Success",
            saveData
        });
    } catch (error) {
        // Send error response
        res.status(500).send({ message: error.message });
    }
};



export const getBlogsData = async (req, res) => {
    try {
        const getData = await BlogModel.find({});
        res.status(200).send({
            message: "All blogs get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


export const updateBlogsDataById = async (req, res) => {
    try {
        const { id } = req.params;
        const { heading, subHeading, blogData, blogTags } = req.body;

        // Parse blogData from JSON string if necessary
        const parsedBlogData = JSON.parse(blogData);

        // Array to store uploaded image URLs
        const images = [];

        // Check if req.files exists and is an array
        if (req.files && Array.isArray(req.files)) {
            // Loop through uploaded files and upload to Cloudinary
            for (const file of req.files) {
                const result = await cloudinary.uploader.upload(file.path);
                images.push(result.secure_url);
                fs.unlinkSync(file.path);
            }
        }

        // Find the blog post by id
        const blogPost = await BlogModel.findById(id);
        if (!blogPost) {
            return res.status(404).json({
                error: 'Blog post not found'
            });
        }

        // Update fields with new values or keep existing values if not provided
        blogPost.heading = heading || blogPost.heading;
        blogPost.subHeading = subHeading || blogPost.subHeading;
        if (images.length > 0) {
            blogPost.homeImg = images[0] || blogPost.homeImg;
            blogPost.headerImg = images[1] || blogPost.headerImg;
        }

        // Update blogData array
        if (parsedBlogData && Array.isArray(parsedBlogData)) {
            blogPost.blogData = parsedBlogData.map(item => ({
                blogTitle: item.blogTitle,
                blogDesc: item.blogDesc
            }));
        }

        // Update blogTags array
        if (blogTags) {
            blogPost.blogTags = blogTags.split(',').map(tag => ({
                tags: tag.trim()
            }));
        }

        // Save the updated blog post
        const updatedData = await blogPost.save();

        res.status(200).send({
            message: "Blog post updated successfully",
            updatedData
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};




export const deleteBlogsData = async (req, res) => {
    try {
        const { id } = req.params;
        await BlogModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const getBlogDataByCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const getDataByCategory = await BlogModel.findById({_id:id });
        res.status(200).send({
            message: "blog retrieved successfully",
            data: getDataByCategory
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const getBlogDataBySubCategory = async (req, res) => {
    try {
        const { Subcategory } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataBySubCategory = await BlogModel.find({ Subcategory: Subcategory });

        // Check if data was found
        if (getDataBySubCategory.length > 0) {
            res.status(200).send({
                message: "blog retrieved successfully",
                data: getDataBySubCategory
            });
        } else {
            res.status(200).send({
                message: "No blog found for the specified category and subcategory"
            });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const getBlogDataByCategorySubCategory = async (req, res) => {
    try {
        const { category, Subcategory } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataBySubCategory = await BlogModel.find({ category, Subcategory });
        res.status(200).send({
            message: "blog retrieved successfully",
            data: getDataBySubCategory
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

