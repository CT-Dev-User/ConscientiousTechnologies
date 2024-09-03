import express from "express";
import { deleteUser, editUser, getAllusers, login, logout, register } from "../controllers/userController.js";
import { authlogin, Super_Admin } from "../middleware/userauth.js";
const route = express.Router();


route.post("/register", register);
route.post("/login", login);
route.post("/logout", authlogin, logout);
route.get("/all-users", authlogin, Super_Admin, getAllusers);
route.delete("/delete-user/:id", authlogin, Super_Admin, deleteUser);
route.put("/update-user/:id", authlogin, Super_Admin, editUser);
export default route;
