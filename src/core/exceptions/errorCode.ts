export interface CustomError {
  code: string,
  message: string
}

interface IErrorCodes {
  UNEXPECTED_ERROR: CustomError
}

export const ERROR_CODES: IErrorCodes = {
  UNEXPECTED_ERROR: {
    code: '000001',
    message: 'Unexpected error'
  }
} 