import axios from 'axios'
import {getProductsProps, ProductItem} from "../modules/products/types";

class ProductService {
    private static apiUrl = 'http://localhost:5000/product'

    public static products(data: getProductsProps) {
        let getProductsUrl = `${this.apiUrl}`
        if (data.search && data.search !== '') {
            getProductsUrl += `?search=${data.search}`
        }
        return axios
            .get(getProductsUrl, {
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

    public static createProduct(data: { weight: number; title: string; products: ProductItem[]; storageId: string }) {
        let getProductUrl = `${this.apiUrl}`
        return axios
            .post(getProductUrl, {
                storageId: data.storageId,
                weight: data.weight,
                title: data.title
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

    public static getProductById(id: string) {
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
    public static getProductByStorageId(storageId: string) {
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

export default ProductService
