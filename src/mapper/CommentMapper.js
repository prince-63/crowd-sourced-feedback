import CommentResponseDTO from "../dto/CommentResponseDTO.js";

class CommentMapper {
    static mapToCommentResponseDTO(comment) {
        return new CommentResponseDTO(
            comment.id,
            comment.content,
            comment.productId,
            comment.authorId,
            comment.isPinned,
            comment.createdAt
        )
    }
}

export default CommentMapper;