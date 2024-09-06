import mongoose from "mongoose";

const CommonFaqSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: {
        answerText: { type: String },
        answerImg: { type: String }
    }
}, { timestamps: true });

const CommonFaqModel = mongoose.model('CommonFaq', CommonFaqSchema);
export default CommonFaqModel;
