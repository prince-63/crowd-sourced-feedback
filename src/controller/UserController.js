import registerUser from "./user/registerUser.js";
import loginUser from "./user/loginUser.js";
import getUser from "./user/getUser.js"

class UserController {
    static registerUser = registerUser;
    static loginUser = loginUser;
    static getUser = getUser;
}

export default UserController;