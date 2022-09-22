export interface CustomError {
    code: string,
    message: string
}

interface IErrorCodes {
    UNEXPECTED_ERROR: CustomError
    BAD_REQUEST: CustomError
}

export const ERROR_CODES: IErrorCodes = {
    UNEXPECTED_ERROR: {
        code: 'MF0001',
        message: 'Unexpected error'
    },
    BAD_REQUEST: {
        code: 'MF0002',
        message: 'Bad request'
    }
} 
