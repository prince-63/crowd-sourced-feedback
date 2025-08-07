class ProductResponseDTO {
    constructor(productId, title, description, link, creatorId) {
        this.productId = productId;
        this.title = title;
        this.description = description;
        this.link = link;
        this.creatorId = creatorId;
    }
}

export default ProductResponseDTO;