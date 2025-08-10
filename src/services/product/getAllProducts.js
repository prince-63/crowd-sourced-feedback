import ProductRepository from "../../repositories/ProductRepository.js";

const getAllProducts = async () => {
    return ProductRepository.getAllProducts();
}

export default getAllProducts;