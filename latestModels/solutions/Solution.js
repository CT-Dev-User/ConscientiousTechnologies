import mongoose from "mongoose";

const LatestSolutionSchema = new mongoose.Schema({
    solutionName: { type: String },
    cardImage: { type: String },
    cardDescription: { type: String },
    headerTagLine: { type: String },
    headerImage: { type: String }
   
}, { timestamps: true });

const LatestSolutionModel = mongoose.model('latestSolution', LatestSolutionSchema);
export default LatestSolutionModel;