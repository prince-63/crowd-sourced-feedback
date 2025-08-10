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

    static async getAllCommentsByProductId(productId) {
        return client.comment.findMany({
            where: {
                productId: productId,
            },
            orderBy: {
                createdAt: 'desc',
            }
        })
    }

}

export default CommentRepository;