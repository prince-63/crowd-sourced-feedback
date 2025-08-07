import BaseApiConstant from "./BaseApiConstant.js";

class VoteApiConstant {
    static VOTE_BASE = BaseApiConstant.BASE + "votes/"
    static VOTE_PRODUCT = VoteApiConstant.VOTE_BASE + "vote/:productId";
}

export default VoteApiConstant;