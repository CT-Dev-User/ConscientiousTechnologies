import LatestBlogModel from '../latestModels/blogs/Blogs.js';
import cloudinary from '../cloudinary.js';
import fs from 'fs';


const uploadToCloudinary = async (filePath) => {
    try {
        const result = await cloudinary.v2.uploader.upload(filePath);
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(`Error deleting file: ${filePath}`, err);
            } else {
                console.log(`Successfully deleted file: ${filePath}`);
            }
        });
        return result.secure_url;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
    }
};

// Add new blog
export const addBlog = async (req, res) => {
    try {
        const { category, subCategory, cardHeading, cardSubHeading, articleData, blogTags, headerTitle, HeaderDesc } = req.body;
        let headerImage = "";
        let cardImage = "";
        const parsedArticleData = JSON.parse(articleData);


        // File upload handling for header and card images
        if (req.files && req.files.headerImage) {
            headerImage = await uploadToCloudinary(req.files.headerImage[0].path);
        }
        if (req.files && req.files.cardImage) {
            cardImage = await uploadToCloudinary(req.files.cardImage[0].path);
        }

        const newBlog = new LatestBlogModel({
            category,
            subCategory,
            cardHeading,
            cardSubHeading,
            headerTitle,
            HeaderDesc,
            cardImage, // Assuming first image is the Card Image
            headerImage, // Assuming second image is the Header Image
            articleData: parsedArticleData,
            blogTags
        });

        const saveBlog = await newBlog.save();
        res.status(200).send({
            status: "Success",
            saveBlog
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await LatestBlogModel.find({}).sort({ createdAt: -1 });
        res.status(200).send({
            status: "Success",
            blogs
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get blog by ID
export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await LatestBlogModel.findById(id);
        if (!blog) {
            return res.status(404).send({ message: "Blog not found" });
        }
        res.status(200).send({
            status: "Success",
            blog
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
// Get blog by ID
export const getBlogByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const blog = await LatestBlogModel.find({ category: category});
        // if (!blog) {
        //     return res.status(404).send({ message: "Blog not found" });
        // }
        res.status(200).send({
            status: "Success",
            blog
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
export const getBlogBysubCategory = async (req, res) => {
    try {
        const { category, subCategory } = req.params;
        const blog = await LatestBlogModel.find({ category: category, subCategory: subCategory });
        if (!blog) {
            return res.status(404).send({ message: "Blog not found" });
        }
        res.status(200).send({
            status: "Success",
            blog
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Update blog by ID// Update blog by ID
export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, subCategory, cardHeading, cardSubHeading, articleData, blogTags, headerTitle, HeaderDesc } = req.body;
        const blog = await LatestBlogModel.findById(id);

        if (!blog) {
            return res.status(404).send({ message: "Blog not found" });
        }

        // Parse articleData if provided
        let parsedArticleData = blog.articleData; // Use existing articleData as default
        if (articleData) {
            parsedArticleData = JSON.parse(articleData);
        }

        // File upload handling for header and card images
        let headerImage = blog.headerImage; // Default to existing image
        let cardImage = blog.cardImage;     // Default to existing image

        if (req.files && req.files.headerImage) {
            // If a new headerImage is uploaded, update it
            headerImage = await uploadToCloudinary(req.files.headerImage[0].path);
        }

        if (req.files && req.files.cardImage) {
            // If a new cardImage is uploaded, update it
            cardImage = await uploadToCloudinary(req.files.cardImage[0].path);
        }

        // Update the blog fields
        blog.headerTitle = headerTitle || blog.headerTitle;
        blog.HeaderDesc = HeaderDesc || blog.HeaderDesc;
        blog.category = category || blog.category;
        blog.subCategory = subCategory || blog.subCategory;
        blog.cardHeading = cardHeading || blog.cardHeading;
        blog.cardSubHeading = cardSubHeading || blog.cardSubHeading;
        blog.cardImage = cardImage; // Update with new or existing image
        blog.headerImage = headerImage; // Update with new or existing image
        blog.articleData = parsedArticleData;
        blog.blogTags = blogTags || blog.blogTags;

        const updatedBlog = await blog.save();
        res.status(200).send({
            status: "Success",
            updatedBlog
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


// Delete blog by ID
export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        await LatestBlogModel.findByIdAndDelete(id);
        res.status(200).send({
            status: "Success",
            message: "Blog deleted successfully"
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
