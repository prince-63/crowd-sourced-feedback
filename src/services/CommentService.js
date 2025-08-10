import addComment from "./comment/addComment.js";
import getAllCommentsByProductId from "./comment/getAllCommentsByProductId.js";

class CommentService {
    static addComment = addComment;
    static getAllCommentsByProductId = getAllCommentsByProductId;
}

export default CommentService;