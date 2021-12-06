import axios from 'axios'
import {getStoragesProps, StoragesItem} from "../modules/storages/types";

class StorageService {
    private static apiUrl = 'http://localhost:5000/storage'

    public static storages(data: getStoragesProps) {
        let getStoragesUrl = `${this.apiUrl}/manager`
        if (data.search && data.search !== '') {
            getStoragesUrl += `?search=${data.search}`
        }
        return axios
            .get(getStoragesUrl, {
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

    public static createStorage(data: { storages: StoragesItem[]; address: string; latitude: number; title: string; longitude: number }) {
        let getStoragesUrl = `${this.apiUrl}`
        return axios
            .post(getStoragesUrl, {
                address: data.address,
                title: data.title,
                latitude: data.latitude,
                longitude: data.longitude
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

    public static getStorageById(id: string) {
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

}

export default StorageService
