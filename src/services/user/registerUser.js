import UserRepository from "../../repositories/UserRepository.js";
import bcrypt from "bcrypt";

const SALT_ROUND = process.env.SALT_ROUND || 12;

const registerUser = async (userData) => {

    const isExistsEmail = await UserRepository.findUserByEmail(userData.email);

    if (isExistsEmail) {
        throw new Error("Email already exists");
    }

    const hashPwd = await bcrypt.hash(userData.password, SALT_ROUND);

    return await UserRepository.createUser({
        name: userData.name,
        email: userData.email,
        password: hashPwd,
        role: userData.role,
    });
}

export default registerUser;