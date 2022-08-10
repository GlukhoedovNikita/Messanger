export interface IUser {
    name: string,
    lastname: string,
    email: string,
    login: string,
    phone: string,
    id: number,
}

export interface IUserTemplateRegistration {
    name?: string,
    lastname?: string,
    email?: string,
    password?: string,
    login?: string,
    phone?: string,
}

export interface IUserRegistration {
    name: string,
    lastname: string,
    email: string,
    password: string,
    login: string,
    phone: string,
}

export interface IUserLogin {
    login: string,
    password: string,
}

export interface ITokens {
    accessToken: string,
    refreshToken: string,
}

export interface IAuthState {
    loading: boolean,
    error: null | string,
    isAuth: boolean,
    user: IUser,
    userTemplateRegistration: IUserTemplateRegistration
}

export interface IAuthResponse extends ITokens {
    user: IUser,
}
