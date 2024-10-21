import mongoose from "mongoose";

const LatestSubServiceSchema = new mongoose.Schema({
    serviceName: { type: String },
    subServiceTitle: { type: String },
    cardNo:{type:Number},
    cardImage: { type: String },
    cardTitle: { type: String },
    headerTagLine: { type: String },
    headerDescription: { type: String },
    headerImage: { type: String }

}, { timestamps: true });

const LatestSubServiceModel = mongoose.model('latestSubService', LatestSubServiceSchema);
export default LatestSubServiceModel;