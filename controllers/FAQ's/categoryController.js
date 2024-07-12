import CategoryFaqModel from "../../Models/Category/category.js";


export const addCategory = async (req, res) => {
    try {
        const { faqCategory } = req.body;
        const newData = new CategoryFaqModel({
            faqCategory
        });

        // Save data to the database
        const saveData = await newData.save();

        // Send success response with saved data
        res.status(200).send({
            status: "Success",
            saveData
        });
    } catch (error) {
        // Send error response
        res.status(500).send({ message: error.message });
    }
};

export const getCategory = async (req, res) => {
    try {
        const getData = await CategoryFaqModel.find({});
        res.status(200).send({
            message: "All faq get Successfully", getData
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await CategoryFaqModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
