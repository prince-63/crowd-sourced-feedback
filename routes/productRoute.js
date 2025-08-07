import express from 'express';
import ProductApiConstant from "../constants/ProductApiConstant.js";
import validateBody from "../middlewares/validateBody.js";
import jwtTokenValidator from "../middlewares/jwtTokenValidator.js";
import ProductController from "../src/controller/ProductController.js";
import ProductRequestDTO from "../src/dto/ProductRequestDTO.js";

const router = express.Router();

router.post(ProductApiConstant.POST_PRODUCT, jwtTokenValidator, validateBody(ProductRequestDTO), ProductController.postProduct);

export default router;