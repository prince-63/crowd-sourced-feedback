import BaseApiConstant from "./BaseApiConstant.js";

class ProductApiConstant{
    static PRODUCT_BASE = BaseApiConstant.BASE + "products/"
    static POST_PRODUCT = ProductApiConstant.PRODUCT_BASE + "post";
    static GET_ALL_PRODUCTS = ProductApiConstant.PRODUCT_BASE + "get-all";
    static GET_NEXT_PRODUCTS_LIST = ProductApiConstant.PRODUCT_BASE + "get-next/:lastProductId";
}

export default ProductApiConstant;