import cloudinary from '../../cloudinary.js';
import HeroSection from '../../Models/HomePage/HeroSection.js';

export const addSliderData = async (req, res) => {
    try {
        const uploadResult = await cloudinary.v2.uploader.upload(req.file.path)
        const { title, heroHomedesc } = req.body;
        const herosliderImage = uploadResult.secure_url;

        const newData = new HeroSection ({
            title, herosliderImage, heroHomedesc
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

export const getherosliderdata = async (req, res) => {
    try {
        const getdata = await HeroSection.find({}).sort({ createdAt: -1 });
        res.status(200).send({
            message: "all  data get successfully", getdata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });

    }

}

export const editherosliderdata = async (req, res) => {
    try {
        const { id } = req.params;
        let herosliderImage = null;
        if (req.file) {
            const uploadResult = await cloudinary.v2.uploader.upload(req.file.path);
            herosliderImage = uploadResult.secure_url;
        }
        const { title, heroHomedesc } = req.body;
        const updateObject = {};
        if (title) {
            updateObject.title = title;
        }
        if (heroHomedesc) {
            updateObject.heroHomedesc = heroHomedesc;
        }
        if (herosliderImage) {
            updateObject.herosliderImage = herosliderImage;
        }
        const updatedata = await HeroSection.findByIdAndUpdate(
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

export const deleteheroslliderdata = async (req, res) => {
    try {
        const { id } = req.params;
        await HeroSection.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
