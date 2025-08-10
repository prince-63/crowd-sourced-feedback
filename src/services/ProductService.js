import postProduct from "./product/postProduct.js";
import getAllProducts from "./product/getAllProducts.js";
import getNextProductsList from "./product/getNextProductsList.js";

class ProductService {
    static postProduct = postProduct;
    static getAllProducts = getAllProducts;
    static getNextProductsList = getNextProductsList;
}

export default ProductService;