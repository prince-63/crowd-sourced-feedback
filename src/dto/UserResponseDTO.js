class UserResponseDTO {
    constructor(userId, name, email, role, isBlocked) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.role = role;
    }
}

export default UserResponseDTO;