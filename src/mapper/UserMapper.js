import UserResponseDTO from '../dto/UserResponseDTO.js';

class UserMapper {
    constructor() {
    }

    static mapToUserResponseDTO(user) {
        return new UserResponseDTO(
            user.id,
            user.name,
            user.email,
            user.role,
            user.isBlocked
        )
    }
}

export default UserMapper;