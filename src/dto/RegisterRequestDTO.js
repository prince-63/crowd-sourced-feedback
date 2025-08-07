import pkg from 'bean-validator';
const {defineField, EMAIL, NOT_EMPTY, NOT_NULL} = pkg;

class RegisterRequestDTO {
    constructor(name, email, password, role) {
        defineField(this, "name", name, [
            { type: NOT_EMPTY, message: "Name is required" }
        ]);
        defineField(this, "email", email, [
            { type: EMAIL, message: "Invalid email" }
        ]);
        defineField(this, "password", password, [
            {type: NOT_NULL, message: "Password is required"}
        ]);
        this.role = role;
    }
}

export default RegisterRequestDTO;