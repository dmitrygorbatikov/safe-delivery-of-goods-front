import {Dispatch} from "redux";
import {DriverItem, DriversEnumTypes, getDriversProps} from "./types";
import DriversService from "../../services/drivers.service";

export const driversRequest = () => {
    return {
        type: DriversEnumTypes.GET_DRIVER_REQUEST,
    }
}

export const driversResponse = (drivers: DriverItem[]) => {
    return {
        type: DriversEnumTypes.GET_DRIVER_RESPONSE,
        payload: drivers,
    }
}

export const driversError = (error: string | undefined) => {
    return {
        type: DriversEnumTypes.GET_DRIVER_ERROR,
        payload: error,
    }
}


export const getDrivers = (data: getDriversProps) => {
    return async (dispatch: Dispatch) => {
        dispatch(driversRequest())
        const res = await DriversService.drivers(data)
        if (res.error) {
            dispatch(driversError(res.error))
        } else if (res.drivers !== undefined) {
            dispatch(driversResponse(res.drivers))
        }
    }
}

export const postDriverRequest = () => {
    return {
        type: DriversEnumTypes.POST_DRIVER_REQUEST,
    }
}

export const postStorageResponse = (data: {drivers: DriverItem[], driver: DriverItem}) => {
    data.drivers.push(data.driver)
    return {
        type: DriversEnumTypes.POST_DRIVER_RESPONSE,
        payload: data.drivers,
    }
}

export const postDriverError = (error: string | undefined) => {
    return {
        type: DriversEnumTypes.POST_DRIVER_ERROR,
        payload: error,
    }
}

export const postDriverItem = (data: { password: string; surname: string; name: string; drivers: DriverItem[]; email: string }) => {
    return async (dispatch: Dispatch) => {
        dispatch(postDriverRequest())
        const res = await DriversService.createDriver(data)
        if (res.error) {
            dispatch(postDriverError(res.error))
        } else if (res.driver !== undefined) {
            const newDrivers: DriverItem[] = []
            data.drivers.push(res.driver)
            for (let i = 0; i < data.drivers.length; i++) {
                newDrivers.push(data.drivers[i])
            }
            dispatch(driversResponse(newDrivers))
        }
    }
}

export const driverItemRequest = () => {
    return {
        type: DriversEnumTypes.GET_DRIVER_ITEM_REQUEST,
    }
}

export const driverItemResponse = (driver: DriverItem) => {
    return {
        type: DriversEnumTypes.GET_DRIVER_ITEM_RESPONSE,
        payload: driver,
    }
}

export const driverItemError = (error: string | undefined) => {
    return {
        type: DriversEnumTypes.GET_DRIVER_ITEM_ERROR,
        payload: error,
    }
}

export const getDriverItem = (id: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(driverItemRequest())
        const res = await DriversService.getDriverById(id)
        if (res.error) {
            dispatch(driverItemError(res.error))
        } else if (res.driver !== undefined) {
            dispatch(driverItemResponse(res.driver))
        }
    }
}

export const storageDriversRequest = () => {
    return {
        type: DriversEnumTypes.GET_STORAGE_DRIVER_REQUEST,
    }
}

export const storageDriversResponse = (drivers: DriverItem) => {
    return {
        type: DriversEnumTypes.GET_STORAGE_DRIVER_RESPONSE,
        payload: drivers,
    }
}

export const storageDriversError = (error: string | undefined) => {
    return {
        type: DriversEnumTypes.GET_STORAGE_DRIVER_ERROR,
        payload: error,
    }
}

export const getStorageDrivers = (storageId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(storageDriversRequest())
        const res = await DriversService.getDriverByStorageId(storageId)
        if (res.error) {
            dispatch(storageDriversError(res.error))
        } else if (res.drivers !== undefined) {
            dispatch(storageDriversResponse(res.drivers))
        }
    }
}
