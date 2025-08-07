import VoteRepository from "../../repositories/VoteRepository.js";

const vote = async (userId, productId) => {
    const existsVote = await VoteRepository.findVoteByUserIdAndProductId(userId, productId);

    if (existsVote) {
        throw new Error(`The user already voted in this product.`);
    }

    return await VoteRepository.vote(userId, productId);
}

export default vote;