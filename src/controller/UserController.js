import registerUser from "./user/registerUser.js";
import loginUser from "./user/loginUser.js";

class UserController {
    static registerUser = registerUser;
    static loginUser = loginUser;
}

export default UserController;