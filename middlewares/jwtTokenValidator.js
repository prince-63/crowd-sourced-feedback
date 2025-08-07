import ApplicationConstants from "../constants/ApplicationConstants.js";
import ErrorResponseDTO from "../src/dto/ErrorResponseDTO.js";
import jwtHelper from "../src/utils/JwtHelper.js";

const jwtTokenValidator = async (req, res, next) => {
    const token = req.header(ApplicationConstants.AUTHORIZATION);

    if (!token) {
        res.status(401).send(
            new ErrorResponseDTO(req.path, 401, "no token provided")
        );
    }

    const payload = jwtHelper.verifyToken(token, process.env.JWT_SECRET);

    if (payload.exp < new Date().getTime()) {
        res.status(401).send(
            new ErrorResponseDTO(req.path, 401, "your token is expired!")
        )
    }

    req.params = {
        id: payload.userId,
        email: payload.email,
        ...req.params
    };
    next();
}

export default jwtTokenValidator;