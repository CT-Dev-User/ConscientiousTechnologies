import mongoose from "mongoose";

const LatestIndustrySchema = new mongoose.Schema({
    industryName: { type: String },
    cardData: {
        cardImage: { type: String },
        description: { type: String }
    },
    headerData: {
        headerTagLine: { type: String },
        headerImage: { type: String }
    }
}, { timestamps: true });

const LatestIndustryModel = mongoose.model('latestIndustry', LatestIndustrySchema);
export default LatestIndustryModel;