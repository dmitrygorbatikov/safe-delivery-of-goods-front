import axios from 'axios'
import {LoginData, RegisterData} from "../modules/auth/types";

class AuthService {
    private static apiUrl = 'http://localhost:5000/auth'

    public static login(data: LoginData) {
        return axios
            .post(`${this.apiUrl}/login`, data, {})
            .then((res) => {
                return res.data
            })
            .catch((err) => {})
    }
    public static register(data: RegisterData) {
        return axios
            .post(`${this.apiUrl}/register`, data, {})
            .then((res) => {
                return res.data
            })
            .catch((err) => {})
    }
}

export default AuthService
