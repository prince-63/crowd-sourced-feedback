import UserService from "../../services/UserService.js";
import RegisterResponseDTO from "../../dto/RegisterResponseDTO.js";
import ResponseDTO from "../../dto/ResponseDTO.js";
import ErrorResponseDTO from "../../dto/ErrorResponseDTO.js";

const registerUser = async (req, res) => {
    const userData = req.body;

    try {
        const savedUser = await UserService.registerUser(userData);

        const responseData = new RegisterResponseDTO(
            savedUser.id,
            savedUser.name,
            savedUser.email,
            savedUser.role
        );

        res.status(200).json(new ResponseDTO("Successfully registered", responseData));
    }
    catch (error) {
        const errorResponse = new ErrorResponseDTO(
            req.path,
            400,
            error.message
        )
        res.status(400).json(errorResponse);
    }
}

export default registerUser;