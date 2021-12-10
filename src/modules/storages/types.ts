export enum StoragesEnumTypes {
    GET_STORAGE_REQUEST = 'GET_STORAGE_REQUEST',
    GET_STORAGE_RESPONSE = 'GET_STORAGE_RESPONSE',
    GET_STORAGE_ERROR = 'GET_STORAGE_ERROR',

    POST_STORAGE_REQUEST = 'POST_STORAGE_REQUEST',
    POST_STORAGE_RESPONSE = 'POST_STORAGE_RESPONSE',
    POST_STORAGE_ERROR = 'POST_STORAGE_ERROR',

    GET_STORAGE_ITEM_REQUEST = 'GET_STORAGE_ITEM_REQUEST',
    GET_STORAGE_ITEM_RESPONSE = 'GET_STORAGE_ITEM_RESPONSE',
    GET_STORAGE_ITEM_ERROR = 'GET_STORAGE_ITEM_ERROR',

    STORAGES_IOT = 'STORAGES_IOT',
}

export interface StoragesItem {
    _id: string
    title: string
    address: string
    indicators: StorageIndicators[]
    registerDate: number
    latitude: number
    longitude: number
    managerId: string
}

export interface StorageIndicators{
    temperature: number
    humidity: number
    measurementDate: number
}

export interface getStoragesProps {
    search?: string
}

export interface createNewStorageProps {
    storages: StoragesItem[]
    title: string
    address: string
    latitude: number
    longitude: number
}

export interface StoragesIot {
    temperature: number
    humidity: number
    measurementDate: string
}