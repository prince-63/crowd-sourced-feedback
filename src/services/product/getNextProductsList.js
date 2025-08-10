import ProductRepository from "../../repositories/ProductRepository.js";

const getNextProductsList = async (lastProductId) => {
    return ProductRepository.getNextProductsList(lastProductId);
}

export default getNextProductsList;