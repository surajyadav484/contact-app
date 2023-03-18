const BaseError = require("./BaseError");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends BaseError {
  constructor(errorMessage) {
    super(errorMessage, StatusCodes.BAD_REQUEST);
  }
}

class AuthorizationError extends BaseError {
  constructor(errorMessage) {
    super(errorMessage, StatusCodes.UNAUTHORIZED);
  }
}
class NotFoundError extends BaseError {
  constructor(errorMessage) {
    super(errorMessage, StatusCodes.NOT_FOUND);
  }
}

module.exports = { BadRequest, AuthorizationError, NotFoundError };
