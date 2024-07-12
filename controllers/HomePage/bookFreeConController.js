import bookFreeConsultationModel from "../../Models/HomePage/BookFreeConsultation.js";

export const addbookFreeConData = async (req, res) => {
    try {
        const { fullName, companyName, workEmail, workName, message } = req.body;

        const newData = new bookFreeConsultationModel({
            fullName, companyName, workEmail, workName, message
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

export const getbookFreeConData = async (req, res) => {
    try {
        const getData = await bookFreeConsultationModel.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All book free consultation data get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const editbookFreeConData = async (req, res) => {
    try {
        const { id } = req.params
        const { fullName, companyName, workEmail, workName, message } = req.body;

        const consultationDateById = await bookFreeConsultationModel.findById(id);
        if (!consultationDateById) {
            return res.status(404).json({
                error: 'data not found'
            })
        }
        consultationDateById.fullName = fullName || consultationDateById.fullName
        consultationDateById.companyName = companyName || consultationDateById.companyName
        consultationDateById.workEmail = workEmail || consultationDateById.workEmail
        consultationDateById.workName = workName || consultationDateById.workName
        consultationDateById.message = message || consultationDateById.workName

        const saveData = await consultationDateById.save()

        res.status(200).send({
            message: "Data updated Successfully",
            saveData
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deletebookFreeConData = async (req, res) => {
    try {
        const { id } = req.params;
        await bookFreeConsultationModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}