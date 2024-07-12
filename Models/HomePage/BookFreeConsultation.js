import mongoose from "mongoose";

const bookFreeConsultationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    companyName: { type: String, required: true },
    workEmail: { type: String, required: true },
    workName: { type: String, required: true },
    message: { type: String },

}, { timestamps: true });

const bookFreeConsultationModel = mongoose.model('book_free_consultation', bookFreeConsultationSchema);
export default bookFreeConsultationModel; 