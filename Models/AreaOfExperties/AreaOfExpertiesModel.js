import mongoose from "mongoose";

const expertiesSchema = new mongoose.Schema({
    Category:{type:String},
    SubCategory:{type:String},
    title: { type: String, required: true },
    image: {type: String}
}, { timestamps: true });

const expertiesModel = mongoose.model('area_of_experties', expertiesSchema);
export default expertiesModel;
