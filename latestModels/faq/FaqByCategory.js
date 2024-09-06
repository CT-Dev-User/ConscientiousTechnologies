import mongoose from "mongoose";

const FaqByCategorySchema = new mongoose.Schema({
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    question: { type: String, required: true },
    answer: {
        answerText: { type: String },
        answerImg: { type: String }
    }
}, { timestamps: true });

const FaqByCategoryModel = mongoose.model('FaqByCategory', FaqByCategorySchema);
export default FaqByCategoryModel;
