import mongoose from "mongoose";

const FaqSchema = new mongoose.Schema({
    category: { type: String, required: true },
    Subcategory: { type: String },
    question: { type: String },
    answer: {
            answerText: { type: String },
            answerImg: { type: String },
    }
}, { timestamps: true });

const FaqModel = mongoose.model('FaqModel', FaqSchema);
export default FaqModel;
