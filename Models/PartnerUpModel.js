import mongoose from "mongoose";
const partnerUpSchema = new mongoose.Schema({
  heading1: { type: String },
  partnersLogo1: [{
    logo1: { type: String }
  }],
  heading2: { type: String },
  partnersLogo2: [{
    logo2: { type: String }
  }],

}, { timestamps: true });

const partnerUpModel = mongoose.model('partnerUpModel', partnerUpSchema);
export default partnerUpModel;
