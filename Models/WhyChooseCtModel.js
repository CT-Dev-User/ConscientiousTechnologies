import mongoose from "mongoose";
const chooseCtLogoSchema = new mongoose.Schema({
    category: { type: String, required: true },
    Subcategory: { type: String },
    heading: { type: String },
    subtitle: { type: String },
    logoHeading: { type: String },
    logos: [{
        logo:{type:String}
    }],
    points:[{
        title: { type: String},
    }]
}, { timestamps: true });

const chooseCtLogoModel = mongoose.model('chooseCtLogoModel', chooseCtLogoSchema);
export default chooseCtLogoModel;
