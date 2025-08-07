import VoteService from "../../services/VoteService.js";
import ErrorMapper from "../../mapper/ErrorMapper.js";
import VoteMapper from "../../mapper/VoteMapper.js";
import ResponseDTO from "../../dto/ResponseDTO.js";

const vote = async (req, res) => {
    const {id, productId} = req.params;
    try {
        const vote = await VoteService.vote(id, productId);
        const voteResponseDTO = VoteMapper.toVoteResponseDTO(vote);
        const response = new ResponseDTO("Your vote has been added successfully.", voteResponseDTO);
        res.status(200).send(response);
    }
    catch (error) {
        const errorResponse = ErrorMapper.mapToErrorResponseDTO(error, req);
        res.status(500).send(errorResponse);
    }
}

export default vote;