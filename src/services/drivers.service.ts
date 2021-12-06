import axios from 'axios'
import {DriverItem, getDriversProps} from "../modules/drivers/types";

class DriverService {
    private static apiUrl = 'http://localhost:5000/driver'

    public static drivers(data: getDriversProps) {
        let getDriversUrl = `${this.apiUrl}`
        if (data.search && data.search !== '') {
            getDriversUrl += `?search=${data.search}`
        }
        return axios
            .get(getDriversUrl, {
                headers: {
                    token: localStorage.getItem('token') ?? ''
                }
            })
            .then((res) => {
                return res.data
            })
            .catch((err) => {
            })
    }

    public static createDriver(data: { password: string; surname: string; name: string; drivers: DriverItem[]; email: string }) {
        let getDriverUrl = `${this.apiUrl}/register`
        return axios
            .post(getDriverUrl, {
                name: data.name,
                surname: data.surname,
                email: data.email,
                password: data.password
            }, {
                headers: {
                    token: localStorage.getItem('token') ?? ''
                }
            })
            .then((res) => {
                return res.data
            })
            .catch((err) => {
            })
    }

    public static getDriverById(id: string) {
        return axios
            .get(`${this.apiUrl}/get-by-manager/${id}`, {
                headers: {
                    token: localStorage.getItem('token') ?? ''
                }
            })
            .then((res) => {
                return res.data
            })
            .catch((err) => {
            })
    }
    public static getDriverByStorageId(storageId: string) {
        return axios
            .get(`${this.apiUrl}/storage/list/${storageId}`, {
                headers: {
                    token: localStorage.getItem('token') ?? ''
                }
            })
            .then((res) => {
                return res.data
            })
            .catch((err) => {
            })
    }

}

export default DriverService
