import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    companyName: { type: String, required: true },
    workEmail: { type: String, required: true },
    phone: { type: String, required: true },
    message_request: { type: String },
    sourceImage:{type: String},
    nda:{type: Boolean}

}, { timestamps: true });

const ContactUsModel = mongoose.model('contact_us_model', contactUsSchema);
export default ContactUsModel; 