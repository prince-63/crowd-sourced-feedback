import BaseApiConstant from "./BaseApiConstant.js";

class ProductApiConstant{
    static PRODUCT_BASE = BaseApiConstant.BASE + "products/"
    static POST_PRODUCT = ProductApiConstant.PRODUCT_BASE + "post";
}

export default ProductApiConstant;