import express from 'express';
import UserApiConstant from "../constants/UserApiConstant.js";
import UserController from "../src/controller/UserController.js";

const router = express.Router();

router.post(UserApiConstant.REGISTER_USER, UserController.registerUser);

export default router;