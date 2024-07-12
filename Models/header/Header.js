import mongoose from "mongoose";

const HeaderSchema = new mongoose.Schema({
    headerCategory:{type:String},
    headerSubCategory:{type:String},
    title: { type: String, required: true },
    subTitle: { type: String },
    image: { type: String },
}, { timestamps: true });

const HeaderModel = mongoose.model('HeaderModel', HeaderSchema);
export default HeaderModel;
