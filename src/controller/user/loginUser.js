import UserService from "../../services/UserService.js";
import LoginResponseDTO from "../../dto/LoginResponseDTO.js";
import ResponseDTO from "../../dto/ResponseDTO.js";
import ErrorResponseDTO from "../../dto/ErrorResponseDTO.js";
import jwtHelper from "../../utils/JwtHelper.js";
import ApplicationConstants from "../../../constants/ApplicationConstants.js";

const loginUser = async (req, res) => {
    const userData = req.body;

    try {
        const user = await UserService.loginUser(userData);

        const token = jwtHelper.signIn(user.id, user.email, user.role);

        const responseData = new LoginResponseDTO(
            token
        );

        res.header(ApplicationConstants.AUTHENTICATION, token);
        res.status(200).send(new ResponseDTO("Logged Successfully.", responseData));
    }
    catch (error) {
        const errorResponse = new ErrorResponseDTO(
            req.path,
            500,
            error.message
        )
        res.status(500).send(errorResponse);
    }
}

export default loginUser;