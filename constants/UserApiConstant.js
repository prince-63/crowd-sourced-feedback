import BaseApiConstant from "./BaseApiConstant.js";

class UserApiConstant{
    static USER_BASE = BaseApiConstant.BASE + "users/"
    static REGISTER_USER = UserApiConstant.USER_BASE + 'register';
    static LOGIN_USER = UserApiConstant.USER_BASE + 'login';
    static GET_USER = UserApiConstant.USER_BASE + 'get';
}

export default UserApiConstant;