export enum ProductsEnumTypes {
    GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST',
    GET_PRODUCT_RESPONSE = 'GET_PRODUCT_RESPONSE',
    GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR',

    GET_STORAGE_PRODUCT_REQUEST = 'GET_STORAGE_PRODUCT_REQUEST',
    GET_STORAGE_PRODUCT_RESPONSE = 'GET_STORAGE_PRODUCT_RESPONSE',
    GET_STORAGE_PRODUCT_ERROR = 'GET_STORAGE_PRODUCT_ERROR',

    POST_PRODUCT_REQUEST = 'POST_PRODUCT_REQUEST',
    POST_PRODUCT_RESPONSE = 'POST_PRODUCT_RESPONSE',
    POST_PRODUCT_ERROR = 'POST_PRODUCT_ERROR',

    GET_PRODUCT_ITEM_REQUEST = 'GET_PRODUCT_ITEM_REQUEST',
    GET_PRODUCT_ITEM_RESPONSE = 'GET_PRODUCT_ITEM_RESPONSE',
    GET_PRODUCT_ITEM_ERROR = 'GET_PRODUCT_ITEM_ERROR',
}

export interface ProductItem {
    _id: string
    title: string
    weight: number
    storageId: string
    carId: string
    registerDate: number
    managerId: string
}

export interface getProductsProps {
    search?: string
}

export interface createNewProductProps {
    products: ProductItem[]
    storageId: string
    weight: number
    title: string
}