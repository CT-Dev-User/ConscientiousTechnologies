import mongoose from "mongoose";
const LatestToolsSchema = new mongoose.Schema({
    category: { type: String },
    Subcategory: { type: String },
    technology: { type: String },
    subTech: [{
        title: { type: String },
        techLogos: [{
            logo: { type: String }
        }],
    }],

}, { timestamps: true });

const LatestToolsModel = mongoose.model('LatestTools', LatestToolsSchema);
export default LatestToolsModel;
