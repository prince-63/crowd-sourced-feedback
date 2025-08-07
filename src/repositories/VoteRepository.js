import client from "../config/prisma.js";
import ErrorMapper from "../mapper/ErrorMapper.js";

class VoteRepository {
    constructor() {}

    static async findVoteByUserIdAndProductId(userId, productId) {
        return client.vote.findFirst({
            where: {
                productId: productId,
                userId: userId,
            }
        })
    }

    static async vote(userId, productId) {
        return client.vote.create({
            data: {
                userId: userId,
                productId: productId,
            }
        })
    }
}

export default VoteRepository;