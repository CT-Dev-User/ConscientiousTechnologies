import mongoose from "mongoose";

const LatestTechnologySchema = new mongoose.Schema({
    technologyName: { type: String },
    headerData: {
        headerTagLine: { type: String },
        headerImage: { type: String }
    }
}, { timestamps: true });

const LatestTechnologyModel = mongoose.model('LatestTechnology', LatestTechnologySchema);
export default LatestTechnologyModel;