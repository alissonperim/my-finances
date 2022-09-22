import { ErrorHandler } from './errorHandler'

export class BadRequestError extends ErrorHandler {
    constructor(message, customError, readonly statusCode = 400) {
        super(message, statusCode, customError)
    }
}
