import CommentService from "../../services/CommentService.js";
import CommentMapper from "../../mapper/CommentMapper.js";
import ResponseDTO from "../../dto/ResponseDTO.js";
import ErrorMapper from "../../mapper/ErrorMapper.js";

const getAllCommentsByProductId = async (req, res) => {
    const {productId} = req.params;
    try {
        const comments = await CommentService.getAllCommentsByProductId(productId);
        const productCommentsList = CommentMapper.mapToListProductCommentsDTO(comments);
        const response = new ResponseDTO("comments retrieved", productCommentsList);
        res.status(200).send(response);
    }
    catch (error) {
        const errorResponse = ErrorMapper.mapToErrorResponseDTO(error, req);
        res.status(500).send(errorResponse);
    }
}

export default getAllCommentsByProductId;