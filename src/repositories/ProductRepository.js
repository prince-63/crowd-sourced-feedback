import client from "../config/prisma.js";

class ProductRepository {

    constructor() {}

    static async postProduct(userId, product) {
        return client.product.create({
            data: {
                title: product.title,
                description: product.description,
                link: product.link,
                creatorId: userId,
            }
        })
    }

    static async getAllProducts() {
        return client.product.findMany({
            take: 5,
            orderBy: {
                id: "asc",
            },
            include: {
                comments: {
                    take: 2,
                    select: {
                        id: true,
                        content: true,
                        isPinned: true,
                        productId: true,
                        authorId: true,
                        createdAt: true,
                    }
                },
                votes: {
                    take: 2,
                    select: {
                        id: true,
                        userId: true,
                        productId: true,
                        createdAt: true,
                    }
                }
            }
        })
    }

    static getNextProductsList(lastProductId) {
        return client.product.findMany({
            take: 5,
            skip: 1,
            cursor: {
                id: lastProductId,
            },
            orderBy: {
                id: "asc",
            },
            include: {
                comments: {
                    take: 2,
                    select: {
                        id: true,
                        content: true,
                        isPinned: true,
                        productId: true,
                        authorId: true,
                        createdAt: true,
                    }
                },
                votes: {
                    take: 2,
                    select: {
                        id: true,
                        userId: true,
                        productId: true,
                        createdAt: true,
                    }
                }
            }
        });
    }

}

export default ProductRepository;