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

    static mapToListProductCommentsDTO(comments) {
        return comments.map(comment => new CommentResponseDTO(
            comment.id,
            comment.content,
            comment.productId,
            comment.authorId,
            comment.isPinned,
            comment.createdAt
        ));
    }
}

export default CommentMapper;