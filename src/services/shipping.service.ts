import axios from 'axios'
import {
    createNewShippingProps,
    getShippingProps,
} from "../modules/shipping/types";

class ShippingService {
    private static apiUrl = 'http://localhost:5000/shipping'

    public static shipping(data: getShippingProps) {
        let getShippingUrl = `${this.apiUrl}`
        if (data.search && data.search !== '') {
            getShippingUrl += `?search=${data.search}`
        }
        return axios
            .get(getShippingUrl, {
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

    public static createShipping(data: createNewShippingProps) {
        let getShippingUrl = `${this.apiUrl}`
        return axios
            .post(getShippingUrl, {
                shipping: data.shipping,
                goods: data.goods,
                carId: data.carId,
                driverId: data.driverId,
                storageFrom: data.storageFrom,
                storageTo: data.storageTo
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

}

export default ShippingService
