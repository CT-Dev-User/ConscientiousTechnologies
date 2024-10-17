import mongoose from "mongoose";

const LatestBlogSchema = new mongoose.Schema({
    category: { type: String },
    subCategory: { type: String },
    headerTitle:{type:String},
    HeaderDesc:{type:String},
    headerImage: { type: String },
    cardHeading: { type: String },
    cardSubHeading: { type: String },
    cardImage: { type: String },
    articleData: [{
        Title: { type: String },
        Desc: { type: String }
    }],
    blogTags: { type: String } // separated by commas ", "
}, { timestamps: true });

const LatestBlogModel = mongoose.model('LatestBlog', LatestBlogSchema);
export default LatestBlogModel;
