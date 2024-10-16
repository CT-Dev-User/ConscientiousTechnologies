import mongoose from "mongoose";

const CaseStudySchema = new mongoose.Schema({
    category: { type: String },
    Subcategory: { type: String },

    // card
    cardDatatitle: { type: String },
    cardDatasubTitle: { type: String },
    cardDatacoreTech: { type: String },// comma separated
    cardDatacardImage: { type: String },

    // header
    headerTagLine: { type: String },
    headerdesc: { type: String },
    headerImage: { type: String },

    // overview 
    overviewtitle: { type: String },
    overviewindustryType: { type: String },
    overviewbusinessType: { type: String },
    overviewservicesProvided: { type: String },
    overviewdescription: { type: String },
    overviewimage: { type: String },

    // goals, insights, challenges, approach
    goals: { type: String }, // separated by comma
    insights: { type: String },
    insightsImage: { type: String },
    challenges: { type: String },  // separated by comma
    approach: { type: String },

    // execution
    executionHeading1: { type: String },
    executionPoint1: { type: String },
    executionHeading2: { type: String },
    executionPoint2: { type: String },
    executionHeading3: { type: String },
    executionPoint3: { type: String },

    // solution
    solution: { type: String },
    solutionImage: { type: String },
    techTools: { type: String },// separated by comma

    // result Image
    resultsImg1: { type: String },
    resultsImg2: { type: String },
    resultsImg3: { type: String },
}, { timestamps: true });

const CaseStudyModel = mongoose.model('latestCaseStudyModel', CaseStudySchema);
export default CaseStudyModel;
