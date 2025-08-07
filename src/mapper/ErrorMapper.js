import ErrorResponseDTO from "../dto/ErrorResponseDTO.js";

class ErrorMapper {
    constructor() {
    }

    static mapToErrorResponseDTO(error, req) {
        return new ErrorResponseDTO(
            req.path,
            500,
            error.message
        );
    }
}

export default ErrorMapper;