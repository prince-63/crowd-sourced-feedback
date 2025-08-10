import postProduct from "./product/postProduct.js";
import getAllProducts from "./product/getAllProducts.js";
import getNextProductsLists from "./product/getNextProductsList.js";

class ProductController {
    static postProduct = postProduct;
    static getAllProducts = getAllProducts;
    static getNextProductLists = getNextProductsLists;
}

export default ProductController;