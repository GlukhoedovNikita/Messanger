import { pool } from 'index'
import { IUser, IUserRegistartion } from '@interfaces/auth.interfaces'

class AuthQuery {
    async getAll() {
        try {
            const userArray = await pool.query<IUser[]>('SELECT * FROM auth')
            return userArray.rows
        } catch (e) {
            throw e
        }
    }

    async getWithId(id: number) {
        try {
            const user = await pool.query<IUser>('SELECT * FROM auth WHERE id = $1', [id])
            return user.rows[0]
        } catch (e) {
            throw e
        }
    }

    async getWithLogin(login: string) {
        try {
            const user = await pool.query<IUser>('SELECT * FROM auth WHERE login = $1', [login])
            return user.rows[0]
        } catch (e) {
            throw e
        }
    }

    async getWithEmail(email: string) {
        try {
            const user = await pool.query<IUser>('SELECT * FROM auth WHERE email = $1', [email])
            return user.rows[0]
        } catch (e) {
            throw e
        }
    }

    async create(user: IUserRegistartion) {
        try {
            const {
                email,
                login,
                name,
                lastname,
                phone,
                password,
            } = user
            const userCreated = await pool.query<IUser>('INSERT INTO auth(email, login, \n\
                name, lastname, phone, password) values ($1, $2, $3, $4, $5, $6) RETURNING *', [
                email, login, name, lastname, phone, password
            ])
            return userCreated.rows[0]
        } catch (e) {
            throw e
        }
    }

    async update(user: IUserRegistartion) {
        try {
            const {
                email,
                login,
                name,
                lastname,
                phone,
            } = user
            console.log(user)
            const userUpdated = await pool.query<IUser>('UPDATE auth SET email = $1, login = $2, \n\
                name = $3, lastname = $4, phone = $5 RETURNING email, name, login, lastname, phone, id', [
                email, login, name, lastname, phone
            ])
            return userUpdated.rows[0]
        } catch (e) {
            throw e
        }
    }
}

export default new AuthQuery()
