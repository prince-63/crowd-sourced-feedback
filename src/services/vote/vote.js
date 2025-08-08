import VoteRepository from "../../repositories/VoteRepository.js";

const vote = async (userId, productId) => {
    const existsVote = await VoteRepository.findVoteByUserIdAndProductId(userId, productId);

    if (existsVote) {
        return await VoteRepository.removeVote(existsVote.id);
    }

    return await VoteRepository.vote(userId, productId);
}

export default vote;