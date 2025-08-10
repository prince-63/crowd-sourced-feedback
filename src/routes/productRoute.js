import express from 'express';
import ProductApiConstant from "../constants/ProductApiConstant.js";
import validateBody from "../middlewares/validateBody.js";
import jwtTokenValidator from "../middlewares/jwtTokenValidator.js";
import ProductController from "../controller/ProductController.js";
import ProductRequestDTO from "../dto/ProductRequestDTO.js";

const router = express.Router();

router.post(ProductApiConstant.POST_PRODUCT, jwtTokenValidator, validateBody(ProductRequestDTO), ProductController.postProduct);
router.get(ProductApiConstant.GET_ALL_PRODUCTS, ProductController.getAllProducts);
router.get(ProductApiConstant.GET_NEXT_PRODUCTS_LIST, ProductController.getNextProductLists);

export default router;