import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address: { type: String, required: true },
    
}, { timestamps: true });

const addressModel = mongoose.model('address_model', addressSchema);
export default addressModel; 