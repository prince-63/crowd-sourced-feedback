import pkg from 'bean-validator';
const {defineField, EMAIL, NOT_EMPTY, NOT_NULL} = pkg;

class ProductRequestDTO {
    constructor(title, description, link) {
        defineField(this, 'title', title, [
            { type: NOT_EMPTY, message: "product title is required" }
        ]);
        defineField(this, 'description', description, [
            { type: NOT_EMPTY, message: "product description is required" }
        ]);
        defineField(this, 'link', link, [
            { type: NOT_EMPTY, message: "product link is required" }
        ]);
    }
}

export default ProductRequestDTO;