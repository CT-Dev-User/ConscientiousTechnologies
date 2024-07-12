import userModel from "../Models/userModel.js";
import { hashpassword, compare } from "../middleware/helper.js";

export const register = async (req, res) => {
    try {
        const { name, email, phone, password, address, role } = req.body;
        const userExist = await userModel.findOne({ email });

        if (userExist) {
            return res.status(400).send("User already exists, please login");
        } else {
            const hash = await hashpassword(password);
            const newuser = new userModel({
                name,
                email,
                phone,
                password: hash, // Store the hashed password
                address,
                role
            });
            const userSave = await newuser.save();
            console.log(userSave)
            res.status(200).send({ message: "User registered", user: userSave });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).send("User does not exist, please sign up first");
        } else {
            const match = await compare(password, user.password);
            if (match) {
                const token = await user.generatetoken()
                res.status(200).send({ token, user })
                console.log(token)
            }
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, phone, password, role } = req.body;
        const hash = await hashpassword(password);

        const userDataById = await userModel.findById(id);
        if (!userDataById) {
            return res.status(404).json({ error: "user not found" });
        }
        // update the user data
        userDataById.email = email || userDataById.email;
        userDataById.phone = phone || userDataById.phone;
        userDataById.password = hash || userDataById.password;
        userDataById.role = role || userDataById.role;
        // Save the updated users
        await userDataById.save();

        res.status(200).send({ message: "user details updated successfully", userDataById });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const getAllusers = async (req, res) => {
    try {
        const allUsers = await userModel.find().sort({ createdAt: -1 });
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await userModel.findByIdAndDelete({ _id: id });
        res.status(200).send({
            message: "user deleted successfully",
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
