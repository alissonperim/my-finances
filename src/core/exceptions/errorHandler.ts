import { CustomError, ERROR_CODES } from './errorCode'

export class ErrorHandler extends Error {
  public statusCode: number
  public customError: CustomError
  constructor(message: string, statusCode: number, customError: CustomError) {
    super(message)

    this.statusCode = statusCode ?? 500
    this.customError = customError ?? ERROR_CODES.UNEXPECTED_ERROR 
  }
}
