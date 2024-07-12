import express from 'express'
import { login, register } from '../controllers/userController.js';
const userroute = express.Router();
userroute.post("/register", register)
userroute.post("/login", login)

export default userroute
