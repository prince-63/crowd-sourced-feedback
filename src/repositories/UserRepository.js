import client from "../config/prisma.js";

class UserRepository {

    constructor() {
    }

    static async createUser({name, email, password, role="USER"}) {
        return client.user.create({
            data: {name, email, password, role},
        });
    }

    static async findUserByEmail(email) {
        return client.user.findUnique({
            where: { email },
        });
    }
}

export default UserRepository;