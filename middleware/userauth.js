import userModel from "../models/userModels.js";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authlogin = async (req, res, next) => {
    try {
        const decode = await Jwt.verify(req.headers.authorization, process.env.KEY);
        req.user = decode;
        next()
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const Admin = async (req, res, next) => {
    try {
        const userdata = await userModel.findById(req.user._id)
        if (userdata.role === 1) {
            next();
        } else {
            return res.status(400).send({ message: "unauthorized access" })
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}