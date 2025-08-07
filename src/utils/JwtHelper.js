import pkg from 'jsonwebtoken';
import ApplicationConstants from "../../constants/ApplicationConstants.js";
import jwt from "jsonwebtoken";

const {sign} = pkg;

const JWT_SECRET_KEY = ApplicationConstants.JWT_SECRET || ApplicationConstants.JWT_DEFAULT_SECRET;

class JwtHelper {

    static signIn(userId, email, role) {
        return sign({
            iat: new Date().getTime(),
            exp: ApplicationConstants.JWT_TOKEN_EXPIRATION.getTime(),
            issuer: "csf",
            userId: userId,
            email: email,
            role: role,
        }, JWT_SECRET_KEY, {
            algorithm: 'HS256'
        });
    }

    static verifyToken(token) {
        return jwt.verify(token, JWT_SECRET_KEY);
    }

}

export default JwtHelper;