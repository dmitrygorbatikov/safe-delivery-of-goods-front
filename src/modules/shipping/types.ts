export enum ShippingEnumTypes {
    GET_SHIPPING_REQUEST = 'GET_SHIPPING_REQUEST',
    GET_SHIPPING_RESPONSE = 'GET_SHIPPING_RESPONSE',
    GET_SHIPPING_ERROR = 'GET_SHIPPING_ERROR',

    POST_SHIPPING_REQUEST = 'POST_SHIPPING_REQUEST',
    POST_SHIPPING_RESPONSE = 'POST_SHIPPING_RESPONSE',
    POST_SHIPPING_ERROR = 'POST_SHIPPING_ERROR',
}

export interface ShippingItem {
    _id: string
    status: string
    driverId: string
    carId: string
    goods: ShippingGoodsProps[]
    storageFrom: string
    storageTo: string
    dispatchTime: number
    arrivalTime: number
    registerDate: number
    managerId: string
}
export interface ShippingGoodsProps {
    _id: string
    title: string
    weight: number
    storageId: string
    carId: string
    registerDate: number
    managerId: string
}
export interface getShippingProps {
    search?: string
}

export interface createNewShippingProps {
    shipping: ShippingItem[]
    goods: ShippingGoodsProps[]
    carId: string
    driverId: string
    storageFrom: string
    storageTo: string
}