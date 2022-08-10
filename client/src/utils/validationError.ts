/* eslint-disable indent */

const validationError = (fieldName: string, type: 'required' | 'min 3' | 'max 15' | 'email' | 'oneOf') => {
    switch (type) {
        case 'email':
            return `${fieldName} incorrect`
        case 'required':
            return `${fieldName} field is required`
        case 'min 3':
            return `Minimum ${fieldName.toLowerCase()} length 3`
        case 'max 15':
            return `Maximum ${fieldName.toLowerCase()} length 15`
        case 'oneOf':
            return 'Passwords must be the same'
        default:
            throw new Error('Validation type error')
    }
}

export default validationError
