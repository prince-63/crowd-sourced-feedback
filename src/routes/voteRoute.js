import express from 'express';
import jwtTokenValidator from "../middlewares/jwtTokenValidator.js";
import VoteApiConstant from "../constants/VoteApiConstant.js";
import VoteController from "../controller/VoteController.js";

const router = express.Router();

router.post(VoteApiConstant.VOTE_PRODUCT, jwtTokenValidator, VoteController.vote);

export default router;