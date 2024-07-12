import mongoose from "mongoose";

const CaseStudySchema = new mongoose.Schema({
    category: { type: String },
    Subcategory: { type: String },
    title: { type: String },
    caseStudyImage: { type: String },
    desc: { type: String },
    coreTech: { type: String }
}, { timestamps: true });

const CaseStudyModel = mongoose.model('CaseStudyModel', CaseStudySchema);
export default CaseStudyModel;
