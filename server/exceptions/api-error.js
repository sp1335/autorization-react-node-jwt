module.exports = class ApiError extends Error {
    status;
    error;

    constructor(status, message, errors) {
        super(message)
        this.status = status
        this.errors = errors
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User not authorized')
    }
    static BadRequest(message, error = []) {
        return new ApiError(400, message, error)
    }
}