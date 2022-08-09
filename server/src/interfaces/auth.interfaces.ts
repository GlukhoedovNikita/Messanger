export interface IJwtPayload {
    id: number,
    email: string,
    login: string,
}

export interface IUserRegistartion {
    email: string,
    login: string,
    name: string,
    lastname: string,
    phone: string,
    password: string,
}

export interface IUser extends IUserRegistartion {
    id: number,
}
