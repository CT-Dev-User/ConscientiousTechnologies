import contactUsFormModel from "../../latestModels/contactUsPage/contactUsFormModel.js";
export const addContactUsFormData = async (req, res) => {
    try {

        const { fullName, companyName, workEmail, phoneNo, message_request } = req.body;
        const newData = new contactUsFormModel({
            fullName, companyName, workEmail, phoneNo, message_request
        })
        const saveData = await newData.save();
        res.status(200).send({
            status: "Success",
            saveData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


export const getContactUsFormData = async (req, res) => {
    try {
        const getData = await contactUsFormModel.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All contact us data get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deleteContactUsFormData = async (req, res) => {
    try {
        const { id } = req.params;
        await contactUsFormModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}