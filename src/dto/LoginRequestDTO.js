import pkg from 'bean-validator';
const {defineField, EMAIL, NOT_EMPTY} = pkg;

class LoginRequestDTO {
    constructor(email, password) {
        defineField(this, "email", email, [
            { type: EMAIL, message: "Invalid email" }
        ]);
        defineField(this, "password", password, [
            {type: NOT_EMPTY, message: "Password is required"}
        ]);
    }
}

export default LoginRequestDTO;