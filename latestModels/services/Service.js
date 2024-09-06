import mongoose from "mongoose";

const LatestServiceSchema = new mongoose.Schema({
    serviceName: { type: String },
    heroData: {
        tagLine: { type: String },
        heroImage: { type: String }
    },
    cardData: {
        cardImage: { type: String },
        points: [
            {
                heading: { type: String },
                description: { type: String }
            }
        ]
    },
    headerData:{
        headerTagLine: { type: String },
        headerImage: { type: String }
    }
}, { timestamps: true });

const LatestServiceModel = mongoose.model('latestService', LatestServiceSchema);
export default LatestServiceModel;