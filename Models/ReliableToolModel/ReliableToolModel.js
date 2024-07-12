import mongoose from "mongoose";
const reliableToolsSchema = new mongoose.Schema({
    category: { type: String, required: true },
    Subcategory: { type: String },
    technology: { type: String },
    subTech: [{
        title: { type: String },
        techLogos: [{
            logo: { type: String }
        }],    
    }],
   
}, { timestamps: true });

const reliableToolsModel = mongoose.model('reliableToolsModel', reliableToolsSchema);
export default reliableToolsModel;
