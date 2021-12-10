import { AnyAction } from 'redux'
import {StoragesEnumTypes, StoragesIot, StoragesItem} from "./types";

interface StoragesState {
    error?: string
    storageListLoading: boolean
    storageItemLoading: boolean
    storages: StoragesItem[]
    storageItem?: StoragesItem
    storagesIot: StoragesIot
}

const initState: StoragesState = {
    storageListLoading: false,
    storageItemLoading: false,
    storages: [],
    storagesIot: {
        temperature: 0,
        humidity: 0,
        measurementDate: '--'
    }
}

function storagesReducer(state = initState, action: AnyAction): StoragesState {
    switch (action.type) {
        case StoragesEnumTypes.GET_STORAGE_REQUEST:
            return {
                ...state,
                storageListLoading: true,
            }
        case StoragesEnumTypes.GET_STORAGE_RESPONSE:
            return {
                ...state,
                storages: action.payload,
                storageListLoading: false,
            }
        case StoragesEnumTypes.GET_STORAGE_ERROR:
            return {
                ...state,
                storageListLoading: false,
                error: action.payload,
            }
        case StoragesEnumTypes.POST_STORAGE_REQUEST:
            return {
                ...state,
            }
        case StoragesEnumTypes.POST_STORAGE_RESPONSE:
            return {
                ...state,
                storages: action.payload,
            }
        case StoragesEnumTypes.POST_STORAGE_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case StoragesEnumTypes.GET_STORAGE_ITEM_REQUEST:
            return {
                ...state,
                storageItemLoading: true
            }
        case StoragesEnumTypes.GET_STORAGE_ITEM_RESPONSE:
            return {
                ...state,
                storageItem: action.payload,
                storageItemLoading: false
            }
        case StoragesEnumTypes.GET_STORAGE_ITEM_ERROR:
            return {
                ...state,
                error: action.payload,
                storageItemLoading: false
            }
        case StoragesEnumTypes.STORAGES_IOT:
            return {
                ...state,
                storagesIot: action.payload,
            }
        default:
            return state
    }
}
export default storagesReducer
