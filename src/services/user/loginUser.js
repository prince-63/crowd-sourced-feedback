import UserRepository from "../../repositories/UserRepository.js";
import bcrypt from "bcrypt";

const loginUser = async (userData) => {
    const dbUser = await UserRepository.findUserByEmail(userData.email);

    if (!dbUser) {
        throw new Error(`User with email ${userData.email} not found`);
    }

    const isValid = await bcrypt.compare(userData.password, dbUser.password);

    if (!isValid) {
        throw new Error(`Password is invalid`);
    }

    return dbUser;
}

export default loginUser;