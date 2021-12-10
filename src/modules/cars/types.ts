export enum CarEnumTypes {
    GET_CARS_REQUEST = 'GET_CARS_REQUEST',
    GET_CARS_RESPONSE = 'GET_CARS_RESPONSE',
    GET_CARS_ERROR = 'GET_CARS_ERROR',

    GET_STORAGE_CARS_REQUEST = 'GET_STORAGE_CARS_REQUEST',
    GET_STORAGE_CARS_RESPONSE = 'GET_STORAGE_CARS_RESPONSE',
    GET_STORAGE_CARS_ERROR = 'GET_STORAGE_CARS_ERROR',

    POST_CAR_REQUEST = 'POST_CAR_REQUEST',
    POST_CAR_RESPONSE = 'POST_CAR_RESPONSE',
    POST_CAR_ERROR = 'POST_CAR_ERROR',

    GET_CAR_ITEM_REQUEST = 'GET_CAR_ITEM_REQUEST',
    GET_CAR_ITEM_RESPONSE = 'GET_CAR_ITEM_RESPONSE',
    GET_CAR_ITEM_ERROR = 'GET_CAR_ITEM_ERROR',

    CARS_IOT = 'CARS_IOT',

}

export interface CarItem {
    _id: string
    model: string
    carryingCapacity: number
    driverId: string
    indicators: CarIndicators[]
    price: string
    condition: string
    status: string
    number: string
    storageId: string
    latitude: number
    longitude: number
    registerDate: number
    managerId: string
}

export interface CarIndicators {
    engineHeating: number
    inflationOfTires: number
    tightnessOfBolts: number
    measurementDate: number
}

export interface getCarProps {
    search?: string
}
export interface createNewCarProps {
    cars: CarItem[]
    carryingCapacity: number
    model: string
    number: string
    price: string
    storageId: string
    driverId: string
}

export interface CarsIot {
    engineHeating: number,
    inflationOfTires: number,
    tightnessOfBolts: number,
    measurementDate: string
}