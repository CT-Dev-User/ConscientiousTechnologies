import mongoose from "mongoose";

const socialMediaSchema = new mongoose.Schema({
    title: { type: String, required: true },
    social_icon: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });

const socialMediaModel = mongoose.model('social_media', socialMediaSchema);
export default socialMediaModel; 