import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    faqCategory: { type: String, required: true },    
}, { timestamps: true });

const CategoryFaqModel = mongoose.model('cat_faq', CategorySchema);
export default CategoryFaqModel;
