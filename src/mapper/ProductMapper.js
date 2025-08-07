import ProductResponseDTO from "../dto/ProductResponseDTO.js";

class ProductMapper {

    constructor() {}

    static toProductResponseDTO(product) {
        return new ProductResponseDTO(
            product.id,
            product.title,
            product.description,
            product.link,
            product.creatorId
        );
    }
}

export default ProductMapper;