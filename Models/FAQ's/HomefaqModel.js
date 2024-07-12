import mongoose from "mongoose";

const HomeFaqSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: {
        type: {
            answerText: { type: String },
            answerImg: { type: String }  
        },
    }
}, { timestamps: true });

const HomeFaqModel = mongoose.model('home_faq', HomeFaqSchema);
export default HomeFaqModel;
