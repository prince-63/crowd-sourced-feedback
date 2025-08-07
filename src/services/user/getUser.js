import UserRepository from "../../repositories/UserRepository.js";

const getUser = async (email) => {
    const dbUser = await UserRepository.findUserByEmail(email);

    if (!dbUser) {
        throw new Error(`User with email ${email} not found`);
    }

    return dbUser;
}

export default getUser;