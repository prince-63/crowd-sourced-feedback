import ProductService from "../../services/ProductService.js";
import ErrorMapper from "../../mapper/ErrorMapper.js";
import ProductMapper from "../../mapper/ProductMapper.js";
import ResponseDTO from "../../dto/ResponseDTO.js";

const postProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await ProductService.postProduct(id, req.body);
        const productResponseDTO = ProductMapper.toProductResponseDTO(product);
        const response = new ResponseDTO("product posted successfully.", productResponseDTO);
        res.status(200).send(response);
    }
    catch(error) {
        const errorResponse = ErrorMapper.mapToErrorResponseDTO(error, req);
        res.status(500).send(errorResponse);
    }
}

export default postProduct;