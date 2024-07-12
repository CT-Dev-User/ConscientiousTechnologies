import mongoose from "mongoose";

const ClientReviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    profileImage: { type: String, required: true },
    review: { type: String, required: true },
    jobProfile:{type:String, required:true}

}, { timestamps: true });

const ClientReviewModel = mongoose.model('client_review', ClientReviewSchema);
export default ClientReviewModel;   