import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    homePageBlogImage: { type: String, required: true },
    desc: { type: String, required: true },

}, { timestamps: true });

const blogsModel = mongoose.model('blogs', blogSchema);
export default blogsModel;   