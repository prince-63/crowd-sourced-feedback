import UserService from "../../services/UserService.js";
import ResponseDTO from "../../dto/ResponseDTO.js";
import ErrorMapper from "../../mapper/ErrorMapper.js";
import UserMapper from "../../mapper/UserMapper.js";

const getUser = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await UserService.getUser(email);
        const userResponseDTO = UserMapper.mapToUserResponseDTO(user);
        const response = new ResponseDTO("User retrieved successfully.", userResponseDTO);
        res.status(200).send(response);
    }
    catch (error) {
        const errorResponse = ErrorMapper.mapToErrorResponseDTO(error, req);
        res.status(500).send(errorResponse);
    }
}

export default getUser;