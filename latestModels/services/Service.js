import mongoose from "mongoose";

const LatestServiceSchema = new mongoose.Schema({
    serviceName: { type: String },
    headerTagLine: {type: String},
    headerDescription:{type:String},
    headerImage:{type:String},
    cardTitle:{type:String},
    cardImage: { type: String },
    cardPoint1Heading:{ type: String },
    cardPoint1Desc:{type:String},
    cardPoint2Heading:{ type: String },
    cardPoint2Desc:{type:String},
    cardPoint3Heading:{ type: String },
    cardPoint3Desc:{type:String},
    cardPoint4Heading:{ type: String },
    cardPoint4Desc:{type:String},
}, { timestamps: true });

const LatestServiceModel = mongoose.model('latestService', LatestServiceSchema);
export default LatestServiceModel;