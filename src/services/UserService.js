import registerUser from "./user/registerUser.js"
import loginUser from "./user/loginUser.js"

class UserService {
    static registerUser = registerUser;
    static loginUser = loginUser;
}

export default UserService;