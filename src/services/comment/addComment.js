import CommentRepository from "../../repositories/CommentRepository.js";

const addComment = async (userId, productId, comment) => {
    return await CommentRepository.addComment(userId, productId, comment);
}

export default addComment;