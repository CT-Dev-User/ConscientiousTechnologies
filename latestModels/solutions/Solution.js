import mongoose from "mongoose";

const LatestSolutionSchema = new mongoose.Schema({
    solutionName: { type: String },
    cardData: {
        cardImage: { type: String },
        description: { type: String }
    },
    headerData: {
        headerTagLine: { type: String },
        headerImage: { type: String }
    }
}, { timestamps: true });

const LatestSolutionModel = mongoose.model('latestSolution', LatestSolutionSchema);
export default LatestSolutionModel;