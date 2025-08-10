import BaseApiConstant from "./BaseApiConstant.js";

class CommentApiConstant {
    static COMMENT_BASE = BaseApiConstant.BASE + "comments/"
    static ADD_COMMENT = CommentApiConstant.COMMENT_BASE + "add/:productId";
    static GET_COMMENTS_BY_PRODUCT_ID = CommentApiConstant.COMMENT_BASE + "get-comments/:productId";
}

export default CommentApiConstant;