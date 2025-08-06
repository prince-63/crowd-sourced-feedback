class ResponseDTO {
    success
    message;
    data

    constructor(message, data) {
      this.message = message;
      this.success = true;
      this.data = data;
    }
}

export default ResponseDTO;