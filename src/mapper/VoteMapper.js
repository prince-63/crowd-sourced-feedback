import VoteResponseDTO from "../dto/VoteResponseDTO.js";

class VoteMapper {
    constructor() {}

    static toVoteResponseDTO(vote) {
        return new VoteResponseDTO(
             vote.id,
            vote.productId,
            vote.userId
        )
    }
}

export default VoteMapper;