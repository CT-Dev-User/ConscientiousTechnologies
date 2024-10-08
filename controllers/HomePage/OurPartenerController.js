import cloudinary from '../../cloudinary.js';
import OurPartener from '../../Models/HomePage/ourPartenerModel.js';

export const addPartener = async (req, res) => {
    console.log("req.file add", req.file)
    try {
        const uploadResult = await cloudinary.v2.uploader.upload(req.file.path)
        const { title } = req.body;
        const logo = uploadResult.secure_url;

        const newData = new OurPartener({
            title, logo
        })
        console.log(newData)
        const saveData = await newData.save()
        res.status(200).send({
            status: "Success",
            saveData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


export const getPartenarData = async (req, res) => {
    try {
        const getdata = await OurPartener.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All data get Successfully", getdata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const editPartenerData = async (req, res) => {
    console.log("req.file", req.file,"editcontroller")
    try {
        const { id } = req.params;
        let logo = null;
        if (req.file) {
            const uploadResult = await cloudinary.v2.uploader.upload(req.file.path);
            logo = uploadResult.secure_url;
        }
        const { title } = req.body;
        const updateObject = {};
        if (title) {
            updateObject.title = title;
        }
        if (logo) {
            updateObject.logo = logo
        }
        const updatedata = await OurPartener.findByIdAndUpdate(
            { _id: id }, updateObject, { new: true }
        )
        res.status(200).send({
            message:"Data updated successfully",
            updatedata
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deletePartenerData = async (req, res) => {
    try {
        const { id } = req.params;
        await OurPartener.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}