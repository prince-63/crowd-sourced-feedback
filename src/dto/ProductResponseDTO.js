class ProductResponseDTO {
    constructor(productId, title, description, link, creatorId, comments, votes) {
        this.productId = productId;
        this.title = title;
        this.description = description;
        this.link = link;
        this.creatorId = creatorId;
        this.comments = comments;
        this.votes = votes;
    }
}

export default ProductResponseDTO;