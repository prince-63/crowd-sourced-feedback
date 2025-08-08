import pkg from 'bean-validator';
const {defineField, NOT_EMPTY} = pkg;

class CommentRequestDTO {
    constructor(content) {
        defineField(this, 'content', content, [
            {type: NOT_EMPTY, message: "the comment content should not be empty."},
        ])
    }
}

export default CommentRequestDTO;