import addressModel from '../../Models/About/address.js';

export const addAddress = async (req, res) => {
    try {
        const { address } = req.body;
        const newData = new addressModel({
            address
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

export const getAddress = async (req, res) => {
    try {
        const getdata = await addressModel.find({}).sort({ createdAt: -1 });
        res.status(200).send({
            message: "all  data get successfully", getdata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });

    }

}

export const editAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const { address } = req.body;
        const updateObject = {};
        if (address) {
            updateObject.address = address;
        }
        const updatedata = await addressModel.findByIdAndUpdate(
            { _id: id }, updateObject, { new: true }
        );
        res.status(200).send({
            message: "Data updated successfully",
            updatedata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deleteAddress = async (req, res) => {
    try {
        const { id } = req.params;
        await addressModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
