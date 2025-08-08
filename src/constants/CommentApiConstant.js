import BaseApiConstant from "./BaseApiConstant.js";

class CommentApiConstant {
    static COMMENT_BASE = BaseApiConstant.BASE + "comments/"
    static ADD_COMMENT = CommentApiConstant.COMMENT_BASE + "add/:productId";
}

export default CommentApiConstant;