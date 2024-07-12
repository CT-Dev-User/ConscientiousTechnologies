import mongoose from "mongoose";

const NavbarSchema = new mongoose.Schema({
    navCategory: { type: String, required: true },
    navSubcategory: { type: String },
     
}, { timestamps: true });

const navbarModel = mongoose.model('navbarModel', NavbarSchema);
export default navbarModel;