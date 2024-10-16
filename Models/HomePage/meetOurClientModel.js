import mongoose from "mongoose";

const ClientReviewSchema = new mongoose.Schema({
    reviewHeading :{type:String},
    name: { type: String },
    profileImage: { type: String },
    review: { type: String },
    jobProfile:{type:String},
    rating:{type:String}

}, { timestamps: true });

const ClientReviewModel = mongoose.model('client_review', ClientReviewSchema);
export default ClientReviewModel;   