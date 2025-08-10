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

    static toListProductsDTO(products) {
        return products.map(product => new ProductResponseDTO(
            product.id,
            product.title,
            product.description,
            product.link,
            product.creatorId,
            product.comments,
            product.votes
        ));
    }
}

export default ProductMapper;