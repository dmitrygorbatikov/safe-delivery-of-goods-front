export enum DriversEnumTypes {
    GET_DRIVER_REQUEST = 'GET_DRIVER_REQUEST',
    GET_DRIVER_RESPONSE = 'GET_DRIVER_RESPONSE',
    GET_DRIVER_ERROR = 'GET_DRIVER_ERROR',

    GET_STORAGE_DRIVER_REQUEST = 'GET_STORAGE_DRIVER_REQUEST',
    GET_STORAGE_DRIVER_RESPONSE = 'GET_STORAGE_DRIVER_RESPONSE',
    GET_STORAGE_DRIVER_ERROR = 'GET_STORAGE_DRIVER_ERROR',

    POST_DRIVER_REQUEST = 'POST_DRIVER_REQUEST',
    POST_DRIVER_RESPONSE = 'POST_DRIVER_RESPONSE',
    POST_DRIVER_ERROR = 'POST_DRIVER_ERROR',

    GET_DRIVER_ITEM_REQUEST = 'GET_DRIVER_ITEM_REQUEST',
    GET_DRIVER_ITEM_RESPONSE = 'GET_DRIVER_ITEM_RESPONSE',
    GET_DRIVER_ITEM_ERROR = 'GET_DRIVER_ITEM_ERROR',
}

export interface DriverItem {
    _id: string
    name: string
    surname: string
    email: string
    password: string
    role: string
    registerDate: number
    managerId: string
}

export interface getDriversProps {
    search?: string
}

export interface createNewDriverProps {
    drivers: DriverItem[]
    name: string
    surname: string
    email: number
    password: number
}