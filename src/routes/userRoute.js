import express from 'express';
import UserApiConstant from "../constants/UserApiConstant.js";
import UserController from "../controller/UserController.js";
import validateBody from "../middlewares/validateBody.js";
import RegisterRequestDTO from "../dto/RegisterRequestDTO.js";
import LoginRequestDTO from "../dto/LoginRequestDTO.js";
import jwtTokenValidator from "../middlewares/jwtTokenValidator.js";

const router = express.Router();

router.post(UserApiConstant.REGISTER_USER, validateBody(RegisterRequestDTO), UserController.registerUser);
router.post(UserApiConstant.LOGIN_USER, validateBody(LoginRequestDTO), UserController.loginUser);
router.get(UserApiConstant.GET_USER, jwtTokenValidator, UserController.getUser);

export default router;