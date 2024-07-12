import mongoose from "mongoose";

const ourPartenerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    logo: { type: String, required: true },
 
}, { timestamps: true });

const OurPartener = mongoose.model('ourPartener', ourPartenerSchema);

export default OurPartener;   