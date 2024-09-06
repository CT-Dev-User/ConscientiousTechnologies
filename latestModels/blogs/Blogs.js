import mongoose from "mongoose";

const LatestBlogSchema = new mongoose.Schema({
    category: { type: String },
    subCategory: { type: String },
    cardData: {
        heading: { type: String },
        subHeading: { type: String },
        CardImg: { type: String },
        headerImg: { type: String },
    },
    articleData: [{
        Title: { type: String },
        Desc: { type: String }
    }],
    blogTags: { type: String } // separated by commas ", "
}, { timestamps: true });

const LatestBlogModel = mongoose.model('LatestBlog', LatestBlogSchema);
export default LatestBlogModel;
