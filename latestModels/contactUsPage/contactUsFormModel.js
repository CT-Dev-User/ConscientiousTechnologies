import mongoose from "mongoose";

const contactUsFormSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    companyName: { type: String, required: true },
    workEmail: { type: String, required: true },
    phoneNo: { type: String, required: true },
    message_request: { type: String },
}, { timestamps: true });

const contactUsFormModel = mongoose.model('contact_us_form_model', contactUsFormSchema);
export default contactUsFormModel; 