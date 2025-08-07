import UserService from "../../services/UserService.js";
import ResponseDTO from "../../dto/ResponseDTO.js";
import UserMapper from "../../mapper/UserMapper.js";
import ErrorMapper from "../../mapper/ErrorMapper.js";

const registerUser = async (req, res) => {
    const userData = req.body;
    try {
        const savedUser = await UserService.registerUser(userData);
        const responseData = UserMapper.mapToUserResponseDTO(savedUser);
        res.status(200).send(new ResponseDTO("Successfully registered", responseData));
    }
    catch (error) {
        const errorResponse = ErrorMapper.mapToErrorResponseDTO(error, req);
        res.status(500).send(errorResponse);
    }
}

export default registerUser;