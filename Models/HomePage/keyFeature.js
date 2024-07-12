import mongoose from "mongoose";

const keyFeatureSchema = new mongoose.Schema({
    keyFeatureTitle:{type:String},
    keyFeatureImag:{type:String},
    point_one_Title:{type:String},
    point_one_Desc:{type:String},
    point_two_Title:{type:String},
    point_two_Desc:{type:String},
    point_three_Title:{type:String},
    point_three_Desc:{type:String},

}, { timestamps: true });

const keyfeatureModel = mongoose.model('keyfeature', keyFeatureSchema);
export default keyfeatureModel;   