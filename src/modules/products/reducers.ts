import { AnyAction } from 'redux'
import {ProductItem, ProductsEnumTypes} from "./types";

interface ProductsState {
    error?: string
    productListLoading: boolean
    productItemLoading: boolean
    storageProductLoading: boolean
    products: ProductItem[]
    productItem?: ProductItem
    storageProducts: ProductItem[]
}

const initState: ProductsState = {
    productListLoading: false,
    productItemLoading: false,
    storageProductLoading: false,
    products: [],
    storageProducts: [],
}

function productsReducer(state = initState, action: AnyAction): ProductsState {
    switch (action.type) {
        case ProductsEnumTypes.GET_PRODUCT_REQUEST:
            return {
                ...state,
                productListLoading: true,
            }
        case ProductsEnumTypes.GET_PRODUCT_RESPONSE:
            return {
                ...state,
                products: action.payload,
                productListLoading: false,
            }
        case ProductsEnumTypes.GET_PRODUCT_ERROR:
            return {
                ...state,
                productListLoading: false,
                error: action.payload,
            }
        case ProductsEnumTypes.POST_PRODUCT_REQUEST:
            return {
                ...state,
            }
        case ProductsEnumTypes.POST_PRODUCT_RESPONSE:
            return {
                ...state,
                products: action.payload,
            }
        case ProductsEnumTypes.POST_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case ProductsEnumTypes.GET_PRODUCT_ITEM_REQUEST:
            return {
                ...state,
                productItemLoading: true
            }
        case ProductsEnumTypes.GET_PRODUCT_ITEM_RESPONSE:
            return {
                ...state,
                productItem: action.payload,
                productItemLoading: false
            }
        case ProductsEnumTypes.GET_PRODUCT_ITEM_ERROR:
            return {
                ...state,
                error: action.payload,
                productItemLoading: false
            }
        case ProductsEnumTypes.GET_STORAGE_PRODUCT_REQUEST:
            return {
                ...state,
                storageProductLoading: true
            }
        case ProductsEnumTypes.GET_STORAGE_PRODUCT_RESPONSE:
            return {
                ...state,
                storageProducts: action.payload,
                storageProductLoading: false
            }
        case ProductsEnumTypes.GET_STORAGE_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
                storageProductLoading: false
            }
        default:
            return state
    }
}
export default productsReducer
