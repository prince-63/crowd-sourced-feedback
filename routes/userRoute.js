import express from 'express';
import UserApiConstant from "../constants/UserApiConstant.js";
import UserController from "../src/controller/UserController.js";
import validateBody from "../middlewares/validateBody.js";
import RegisterRequestDTO from "../src/dto/RegisterRequestDTO.js";
import LoginRequestDTO from "../src/dto/LoginRequestDTO.js";

const router = express.Router();

router.post(UserApiConstant.REGISTER_USER, validateBody(RegisterRequestDTO), UserController.registerUser);
router.post(UserApiConstant.LOGIN_USER, validateBody(LoginRequestDTO), UserController.loginUser);

export default router;