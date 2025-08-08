class CommentResponseDTO {
    constructor(commentId, content, productId, authorId, isPinned, createdAt) {
        this.commentId = commentId;
        this.content = content;
        this.productId = productId;
        this.authorId = authorId;
        this.isPinned = isPinned;
        this.createdAt = createdAt;
    }
}

export default CommentResponseDTO;