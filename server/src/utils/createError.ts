const createError = (condition: boolean, message: string) => {
    if (condition) throw new Error(message)
}

export default createError
