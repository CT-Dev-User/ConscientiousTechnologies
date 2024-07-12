import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    heading: { type: String },
    subHeading: { type: String },
    homeImg: { type: String },
    headerImg: { type: String },
    blogData: [{
        blogTitle: { type: String },
        blogDesc: { type: String }
    }],
    blogTags: [{
        tags: { type: String }
    }]
}, { timestamps: true });

const BlogModel = mongoose.model('blogModel', BlogSchema);
export default BlogModel;
