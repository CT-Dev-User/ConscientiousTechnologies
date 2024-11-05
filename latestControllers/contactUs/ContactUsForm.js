import contactUsFormModel from "../../latestModels/contactUsPage/contactUsFormModel.js";
export const addContactUsFormData = async (req, res) => {
    try {

        const { fullName, companyName, workEmail, phoneNo, message_request } = req.body;
        // Array to store uploaded image URLs
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


// export const editContactUsFormData = async (req, res) => {
//     try {
//         const { id } = req.params
//         const { fullName, companyName, workEmail, phone, message_request } = req.body;
    
//         const contactUsDateById = await contactUsFormModel.findById(id);
//         if (!consultationDateById) {
//             return res.status(404).json({
//                 error: 'data not found'
//             })
//         }
//         contactUsDateById.fullName = fullName || contactUsDateById.fullName
//         contactUsDateById.companyName = companyName || contactUsDateById.companyName
//         contactUsDateById.workEmail = workEmail || contactUsDateById.workEmail
//         contactUsDateById.phone = phone || contactUsDateById.phone
//         contactUsDateById.message_request = message_request || contactUsDateById.message_request
      

//         const saveData = await contactUsDateById.save()
//         res.status(200).send({
//             message: "Data updated Successfully",
//             saveData
//         })
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
// }


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