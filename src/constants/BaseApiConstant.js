const API_VERSION = process.env.API_VERSION || "v1";

class BaseApiConstant {
    static BASE = `/api/${API_VERSION}/csf/`;
}

export default BaseApiConstant;