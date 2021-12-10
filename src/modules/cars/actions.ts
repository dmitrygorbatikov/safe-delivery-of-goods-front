import {Dispatch} from "redux";
import {CarEnumTypes, CarItem, getCarProps} from "./types";
import CarsService from "../../services/cars.service";

export const carsRequest = () => {

    return {
        type: CarEnumTypes.GET_CARS_REQUEST,
    }
}

export const carsResponse = (cars: CarItem[]) => {
    return {
        type: CarEnumTypes.GET_CARS_RESPONSE,
        payload: cars,
    }
}

export const carsError = (error: string | undefined) => {
    return {
        type: CarEnumTypes.GET_CARS_ERROR,
        payload: error,
    }
}


export const getCars = (data: getCarProps) => {
    return async (dispatch: Dispatch) => {
        dispatch(carsRequest())
        const res = await CarsService.cars(data)
        if (res.error) {
            dispatch(carsError(res.error))
        } else if (res.cars !== undefined) {
            dispatch(carsResponse(res.cars))
        }
    }
}

export const postCarRequest = () => {

    return {
        type: CarEnumTypes.POST_CAR_REQUEST,
    }
}

export const postCarResponse = (data: {cars: CarItem[], car: CarItem}) => {
    data.cars.push(data.car)
    return {
        type: CarEnumTypes.POST_CAR_RESPONSE,
        payload: data.cars,
    }
}

export const postCarError = (error: string | undefined) => {
    return {
        type: CarEnumTypes.POST_CAR_ERROR,
        payload: error,
    }
}

export const postCarItem = (data: { cars: CarItem[]; number: string; carryingCapacity: number; driverId: string; price: number; model: string; storageId: string }) => {
    return async (dispatch: Dispatch) => {
        dispatch(postCarRequest())
        const res = await CarsService.createCar(data)
        if (res.error) {
            dispatch(postCarError(res.error))
        } else if (res.car !== undefined) {
            const newCars: CarItem[] = []
            data.cars.push(res.car)
            for (let i = 0; i < data.cars.length; i++) {
                newCars.push(data.cars[i])
            }
            dispatch(carsResponse(newCars))
        }
    }
}

export const carItemRequest = () => {

    return {
        type: CarEnumTypes.GET_CAR_ITEM_REQUEST,
    }
}

export const carItemResponse = (car: CarItem) => {
    return {
        type: CarEnumTypes.GET_CAR_ITEM_RESPONSE,
        payload: car,
    }
}

export const carItemError = (error: string | undefined) => {
    return {
        type: CarEnumTypes.GET_CAR_ITEM_ERROR,
        payload: error,
    }
}
export const getCarItem = (id: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(carItemRequest())
        const res = await CarsService.getCarById(id)
        if (res.error) {
            dispatch(carItemError(res.error))
        } else if (res.car !== undefined) {
            dispatch(carItemResponse(res.car))
        }
    }
}

export const storageCarsRequest = () => {

    return {
        type: CarEnumTypes.GET_STORAGE_CARS_REQUEST,
    }
}

export const storageCarsResponse = (cars: CarItem[]) => {
    return {
        type: CarEnumTypes.GET_STORAGE_CARS_RESPONSE,
        payload: cars,
    }
}

export const storageCarsError = (error: string | undefined) => {
    return {
        type: CarEnumTypes.GET_STORAGE_CARS_ERROR,
        payload: error,
    }
}
export const getStorageCars = (storageId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(storageCarsRequest())
        const res = await CarsService.getCarByStorageId(storageId)
        if (res.error) {
            dispatch(storageCarsError(res.error))
        } else if (res.cars !== undefined) {
            dispatch(storageCarsResponse(res.cars))
        }
    }
}

export const carsIOTResponse = (data: any) => {
    return {
        type: CarEnumTypes.CARS_IOT,
        payload: data,
    }
}
