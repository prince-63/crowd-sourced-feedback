import express from 'express';
import validateBody from "../middlewares/validateBody.js";
import jwtTokenValidator from "../middlewares/jwtTokenValidator.js";
import CommentApiConstant from "../constants/CommentApiConstant.js";
import CommentRequestDTO from "../dto/CommentRequestDTO.js";
import CommentController from "../controller/CommentController.js";

const router = express.Router();

router.post(CommentApiConstant.ADD_COMMENT, jwtTokenValidator, validateBody(CommentRequestDTO), CommentController.addComment);
router.get(CommentApiConstant.GET_COMMENTS_BY_PRODUCT_ID, CommentController.getCommentsByProductId);

export default router;