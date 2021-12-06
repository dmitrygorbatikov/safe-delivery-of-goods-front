import axios from 'axios'
import {CarItem, getCarProps} from "../modules/cars/types";

class StorageService {
    private static apiUrl = 'http://localhost:5000/car'

    public static cars(data: getCarProps) {
        let getCarsUrl = `${this.apiUrl}`
        if (data.search && data.search !== '') {
            getCarsUrl += `?search=${data.search}`
        }
        return axios
            .get(getCarsUrl, {
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

    public static createCar(data: { cars: CarItem[]; number: string; carryingCapacity: number; driverId: string; price: number; model: string; storageId: string }) {
        let getStoragesUrl = `${this.apiUrl}`
        return axios
            .post(getStoragesUrl, {
                carryingCapacity: data.carryingCapacity,
                model: data.model,
                number: data.number.toLocaleLowerCase(),
                price: data.price,
                storageId: data.storageId,
                driverId: data.driverId,
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

    public static getCarById(id: string) {
        return axios
            .get(`${this.apiUrl}/${id}`, {
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

    public static getCarByStorageId(storageId: string) {
        return axios
            .get(`${this.apiUrl}/storage/${storageId}`, {
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

export default StorageService
