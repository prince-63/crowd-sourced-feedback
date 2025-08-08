import CommentService from "../../services/CommentService.js";
import CommentMapper from "../../mapper/CommentMapper.js";
import ResponseDTO from "../../dto/ResponseDTO.js";
import ErrorMapper from "../../mapper/ErrorMapper.js";

const addComment = async (req, res) => {
    const {id, productId} = req.params;
    const {content} = req.body;
    try {
        const comment = await CommentService.addComment(id, productId, {content: content});
        const commentResponseDTO = CommentMapper.mapToCommentResponseDTO(comment);
        const response = new ResponseDTO("comment posted successfully.", commentResponseDTO);
        res.status(200).send(response);
    }
    catch (error) {
        const errorResponse = ErrorMapper.mapToErrorResponseDTO(error, req);
        res.status(500).send(errorResponse);
    }
}

export default addComment;