import ProductRepository from "../../repositories/ProductRepository.js";

const postProduct = async (userId, product) => {
    return await ProductRepository.postProduct(userId, product);
}

export default postProduct;