import mongoose from "mongoose";

const LatestSubServiceSchema = new mongoose.Schema({
    serviceName: { type: String },
    subServiceTitle:{ type: String },
    cardImage: { type: String },
    headerData: {
        headerTagLine: { type: String },
        headerImage: { type: String }
    }
}, { timestamps: true });

const LatestSubServiceModel = mongoose.model('latestSubService', LatestSubServiceSchema);
export default LatestSubServiceModel;