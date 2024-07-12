import mongoose from "mongoose";

const heroSectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    herosliderImage: { type: String, required: true },
    heroHomedesc: { type: String }
}, { timestamps: true });

const HeroSection = mongoose.model('HeroSection', heroSectionSchema);

export default HeroSection;   