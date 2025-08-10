import addComment from "./comment/addComment.js";
import getAllCommentsByProductId from "./comment/getAllCommentsByProductId.js";

class CommentController {
    static addComment = addComment;
    static getCommentsByProductId = getAllCommentsByProductId;
}

export default CommentController;