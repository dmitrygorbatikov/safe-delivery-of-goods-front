import { AnyAction } from 'redux'
import {StoragesEnumTypes, StoragesItem} from "./types";

interface StoragesState {
    error?: string
    storageListLoading: boolean
    storageItemLoading: boolean
    storages: StoragesItem[]
    storageItem?: StoragesItem
}

const initState: StoragesState = {
    storageListLoading: false,
    storageItemLoading: false,
    storages: [],
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
        default:
            return state
    }
}
export default storagesReducer
