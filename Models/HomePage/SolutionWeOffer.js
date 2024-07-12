import mongoose from "mongoose";

const heroSectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    SolutionhomePageImage: { type: String, required: true },
    desc: { type: String, required: true }
}, { timestamps: true });

const HeroSection = mongoose.model('solution-we-offer', heroSectionSchema);

export default HeroSection;   