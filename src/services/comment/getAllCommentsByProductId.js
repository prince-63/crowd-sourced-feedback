import CommentRepository from "../../repositories/CommentRepository.js";

const getAllCommentsByProductId = async (productId) => {
    return CommentRepository.getAllCommentsByProductId(productId);
}

export default getAllCommentsByProductId;