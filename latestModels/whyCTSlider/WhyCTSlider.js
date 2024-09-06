import mongoose from "mongoose";
const LatestWhyCTSchema = new mongoose.Schema({
    category: { type: String },
    heading: { type: String },
    tagLine: { type: String },
    logoHeading: { type: String },
    logos: [{
        logo: { type: String }
    }],
    points: [{
        title: { type: String },
    }]
}, { timestamps: true });

const LatestWhyCTModel = mongoose.model('LatestWhyCT', LatestWhyCTSchema);
export default LatestWhyCTModel;
