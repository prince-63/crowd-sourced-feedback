import UserService from "../../services/UserService.js";
import RegisterResponseDTO from "../../dto/RegisterResponseDTO.js";
import ResponseDTO from "../../dto/ResponseDTO.js";

const registerUser = async (req, res) => {
    const userData = req.body;
    const savedUser = await UserService.registerUser(userData);

    const responseData = new RegisterResponseDTO(
        savedUser.id,
        savedUser.name,
        savedUser.email,
        savedUser.role
    );

    res.status(200).json(new ResponseDTO("Successfully registered", responseData));
}

export default registerUser;