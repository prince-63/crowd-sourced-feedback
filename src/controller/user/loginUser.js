import UserService from "../../services/UserService.js";
import LoginResponseDTO from "../../dto/LoginResponseDTO.js";
import ResponseDTO from "../../dto/ResponseDTO.js";
import jwtHelper from "../../utils/JwtHelper.js";
import ApplicationConstants from "../../../constants/ApplicationConstants.js";
import ErrorMapper from "../../mapper/ErrorMapper.js";

const loginUser = async (req, res) => {
    const userData = req.body;
    try {
        const user = await UserService.loginUser(userData);
        const token = jwtHelper.signIn(user.id, user.email, user.role);
        const responseData = new LoginResponseDTO(token);
        res.header(ApplicationConstants.AUTHORIZATION, token);
        res.status(200).send(new ResponseDTO("Logged Successfully.", responseData));
    }
    catch (error) {
        const errorResponse = ErrorMapper.mapToErrorResponseDTO(error, req);
        res.status(500).send(errorResponse);
    }
}

export default loginUser;