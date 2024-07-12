import mongoose from "mongoose";

const ServiceWeOfferSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ServiceHomePageimage: { type: String, required: true },
    points: [{
        title: { type: String, required: true },
        description: { type: String, required: true }
    }]
}, { timestamps: true });

const ServiceWeOfferModel = mongoose.model('servicedatas', ServiceWeOfferSchema);

export default ServiceWeOfferModel;
 