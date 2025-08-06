import BaseApiConstant from "./BaseApiConstant.js";

class UserApiConstant{
    static USER_BASE = BaseApiConstant.BASE + "users/"
    static REGISTER_USER = UserApiConstant.USER_BASE + 'register';
}

export default UserApiConstant;