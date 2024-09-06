import mongoose from "mongoose";

const LatestNavbarSchema = new mongoose.Schema({
    navCategory: { type: String, required: true }, 
}, { timestamps: true });

const latestNavbarModel = mongoose.model('latestNavbar', LatestNavbarSchema);
export default latestNavbarModel;