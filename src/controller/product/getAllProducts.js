import ProductService from "../../services/ProductService.js";
import ProductMapper from "../../mapper/ProductMapper.js";
import ResponseDTO from "../../dto/ResponseDTO.js";
import ErrorMapper from "../../mapper/ErrorMapper.js";

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        const listProductsDTO = ProductMapper.toListProductsDTO(products);
        const response = new ResponseDTO("Product Retrieved", listProductsDTO);
        res.status(200).send(response);
    }
    catch(error) {
        const errorResponse = ErrorMapper.mapToErrorResponseDTO(error, req);
        res.status(500).send(errorResponse);
    }
}

export default getAllProducts;