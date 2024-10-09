import mongoose from "mongoose";

const LatestIndustrySchema = new mongoose.Schema({
    industryName: { type: String },
    cardImage: { type: String },
    cardDescription: { type: String },
    headerTagLine: { type: String },
    headerImage: { type: String }

}, { timestamps: true });

const LatestIndustryModel = mongoose.model('latestIndustry', LatestIndustrySchema);
export default LatestIndustryModel;