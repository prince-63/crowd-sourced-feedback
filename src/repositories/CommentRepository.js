import client from "../config/prisma.js";

class CommentRepository {
    constructor() {}

    static async addComment(authorId, productId, comment) {
        return client.comment.create({
            data: {
                content: comment.content,
                authorId: authorId,
                productId: productId,
            }
        })
    }

}

export default CommentRepository;