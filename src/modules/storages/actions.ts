import {Dispatch} from "redux";
import {getStoragesProps, StoragesEnumTypes, StoragesItem} from "./types";
import StorageService from "../../services/storages.service";

export const storagesRequest = () => {

    return {
        type: StoragesEnumTypes.GET_STORAGE_REQUEST,
    }
}

export const storagesResponse = (storages: StoragesItem[]) => {
    return {
        type: StoragesEnumTypes.GET_STORAGE_RESPONSE,
        payload: storages,
    }
}

export const storagesError = (error: string | undefined) => {
    return {
        type: StoragesEnumTypes.GET_STORAGE_ERROR,
        payload: error,
    }
}


export const getStorages = (data: getStoragesProps) => {
    return async (dispatch: Dispatch) => {
        dispatch(storagesRequest())
        const res = await StorageService.storages(data)
        if (res.error) {
            dispatch(storagesError(res.error))
        } else if (res.storages !== undefined) {
            dispatch(storagesResponse(res.storages))
        }
    }
}

export const postStorageRequest = () => {

    return {
        type: StoragesEnumTypes.POST_STORAGE_REQUEST,
    }
}

export const postStorageResponse = (data: {storages: StoragesItem[], storage: StoragesItem}) => {
    data.storages.push(data.storage)
    return {
        type: StoragesEnumTypes.POST_STORAGE_RESPONSE,
        payload: data.storages,
    }
}

export const postStorageError = (error: string | undefined) => {
    return {
        type: StoragesEnumTypes.POST_STORAGE_ERROR,
        payload: error,
    }
}

export const postStorageItem = (data: { storages: StoragesItem[]; address: string; latitude: number; title: string; longitude: number }) => {
    return async (dispatch: Dispatch) => {
        dispatch(postStorageRequest())
        const res = await StorageService.createStorage(data)
        if (res.error) {
            dispatch(postStorageError(res.error))
        } else if (res.storage !== undefined) {
            const newStorages: StoragesItem[] = []
            data.storages.push(res.storage)
            for (let i = 0; i < data.storages.length; i++) {
                newStorages.push(data.storages[i])
            }
            dispatch(storagesResponse(newStorages))
        }
    }
}

export const storageItemRequest = () => {

    return {
        type: StoragesEnumTypes.GET_STORAGE_ITEM_REQUEST,
    }
}

export const storageItemResponse = (storage: StoragesItem) => {
    return {
        type: StoragesEnumTypes.GET_STORAGE_ITEM_RESPONSE,
        payload: storage,
    }
}

export const storageItemError = (error: string | undefined) => {
    return {
        type: StoragesEnumTypes.GET_STORAGE_ITEM_ERROR,
        payload: error,
    }
}


export const getStorageItem = (id: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(storageItemRequest())
        const res = await StorageService.getStorageById(id)
        if (res.error) {
            dispatch(storageItemError(res.error))
        } else if (res.storage !== undefined) {
            dispatch(storageItemResponse(res.storage))
        }
    }
}
