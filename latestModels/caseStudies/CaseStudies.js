import mongoose from "mongoose";

const CaseStudySchema = new mongoose.Schema({
    category: { type: String },
    Subcategory: { type: String },
    cardData: {
        title: { type: String },
        subTitle: { type: String },
        coreTech: { type: String }, // separated by comma
        cardImage: { type: String },
        headerImage: { type: String },
    },
    overview: {
        title: { type: String },
        industryType: { type: String },
        businessType: { type: String },
        servicesProvided: { type: String },//separated by comma
        description: { type: String },
        image: { type: String },
    },
    goals: { type: String }, // separated by comma
    insights: { type: String },
    insightsImage: { type: String },
    challenges: [{ point: { type: String } }],
    approach: { type: String },
    execution: [{ heading: { type: String }, points: [{ point: { type: String } }] }],
    solution: { type: String },
    solutionImage: { type: String },
    techTools: { type: String },// separated by comma
    results: [{ resultss: { type: String } }]
}, { timestamps: true });

const CaseStudyModel = mongoose.model('CaseStudyModel', CaseStudySchema);
export default CaseStudyModel;
