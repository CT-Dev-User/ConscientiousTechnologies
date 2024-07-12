import mongoose from "mongoose";

const caseStudiesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    homePageCaseStudiesImage: { type: String, required: true },
    desc: { type: String, required: true },
    coreTech:{type:String, required:true}

}, { timestamps: true });

const caseStudiesModel = mongoose.model('case_studies', caseStudiesSchema);
export default caseStudiesModel; 