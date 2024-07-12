import mongoose from "mongoose";

const industriesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    homePageIndustryImage: { type: String, required: true },
    desc: { type: String, required: true }

}, { timestamps: true });

const industriesModel = mongoose.model('industries', industriesSchema);
export default industriesModel;   