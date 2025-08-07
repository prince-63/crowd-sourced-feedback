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

}

export default ProductRepository;