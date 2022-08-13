export interface IUserUpdate {
    name: string,
    lastname: string,
    email: string,
    login: string,
    phone: string
}

export interface IProfileState {
    disable: boolean,
    userUpdateTemplate: IUserUpdate
}
