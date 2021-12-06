import { AnyAction } from 'redux'
import {DriverItem, DriversEnumTypes} from "./types";

interface DriversState {
    error?: string
    driverListLoading: boolean
    driverItemLoading: boolean
    storageDriversLoading: boolean
    drivers: DriverItem[]
    storageDrivers: DriverItem[]
    driverItem?: DriverItem
}

const initState: DriversState = {
    driverListLoading: false,
    driverItemLoading: false,
    storageDriversLoading: false,
    drivers: [],
    storageDrivers: []
}

function driversReducer(state = initState, action: AnyAction): DriversState {
    switch (action.type) {
        case DriversEnumTypes.GET_DRIVER_REQUEST:
            return {
                ...state,
                driverListLoading: true,
            }
        case DriversEnumTypes.GET_DRIVER_RESPONSE:
            return {
                ...state,
                drivers: action.payload,
                driverListLoading: false,
            }
        case DriversEnumTypes.GET_DRIVER_ERROR:
            return {
                ...state,
                driverListLoading: false,
                error: action.payload,
            }
        case DriversEnumTypes.POST_DRIVER_REQUEST:
            return {
                ...state,
            }
        case DriversEnumTypes.POST_DRIVER_RESPONSE:
            return {
                ...state,
                drivers: action.payload,
            }
        case DriversEnumTypes.POST_DRIVER_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case DriversEnumTypes.GET_DRIVER_ITEM_REQUEST:
            return {
                ...state,
                driverItemLoading: true
            }
        case DriversEnumTypes.GET_DRIVER_ITEM_RESPONSE:
            return {
                ...state,
                driverItem: action.payload,
                driverItemLoading: false
            }
        case DriversEnumTypes.GET_DRIVER_ITEM_ERROR:
            return {
                ...state,
                error: action.payload,
                driverItemLoading: false
            }
        case DriversEnumTypes.GET_STORAGE_DRIVER_REQUEST:
            return {
                ...state,
                storageDriversLoading: true
            }
        case DriversEnumTypes.GET_STORAGE_DRIVER_RESPONSE:
            return {
                ...state,
                storageDrivers: action.payload,
                storageDriversLoading: false
            }
        case DriversEnumTypes.GET_STORAGE_DRIVER_ERROR:
            return {
                ...state,
                error: action.payload,
                storageDriversLoading: false
            }
        default:
            return state
    }
}
export default driversReducer
