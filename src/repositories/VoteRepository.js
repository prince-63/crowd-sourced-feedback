import client from "../config/prisma.js";

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

    static async removeVote(voteId) {
        return client.vote.delete({
            where: {
                id: voteId,
            }
        })
    }

}

export default VoteRepository;