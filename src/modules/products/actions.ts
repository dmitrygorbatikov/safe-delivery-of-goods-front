import {Dispatch} from "redux";
import {getProductsProps, ProductItem, ProductsEnumTypes} from "./types";
import ProductService from "../../services/product.service";

export const productsRequest = () => {
    return {
        type: ProductsEnumTypes.GET_PRODUCT_REQUEST,
    }
}

export const productsResponse = (products: ProductItem[]) => {
    return {
        type: ProductsEnumTypes.GET_PRODUCT_RESPONSE,
        payload: products,
    }
}

export const productsError = (error: string | undefined) => {
    return {
        type: ProductsEnumTypes.GET_PRODUCT_ERROR,
        payload: error,
    }
}


export const getProducts = (data: getProductsProps) => {
    return async (dispatch: Dispatch) => {
        dispatch(productsRequest())
        const res = await ProductService.products(data)
        if (res.error) {
            dispatch(productsError(res.error))
        } else if (res.products !== undefined) {
            dispatch(productsResponse(res.products))
        }
    }
}

export const postProductRequest = () => {
    return {
        type: ProductsEnumTypes.POST_PRODUCT_REQUEST,
    }
}

export const postProductResponse = (data: {products: ProductItem[], product: ProductItem}) => {
    data.products.push(data.product)
    return {
        type: ProductsEnumTypes.POST_PRODUCT_RESPONSE,
        payload: data.products,
    }
}

export const postProductError = (error: string | undefined) => {
    return {
        type: ProductsEnumTypes.POST_PRODUCT_ERROR,
        payload: error,
    }
}

export const postProductItem = (data: { weight: number; title: string; products: ProductItem[]; storageId: string }) => {
    return async (dispatch: Dispatch) => {
        dispatch(postProductRequest())
        const res = await ProductService.createProduct(data)
        if (res.error) {
            dispatch(postProductError(res.error))
        } else if (res.product !== undefined) {
            const newProducts: ProductItem[] = []
            data.products.push(res.product)
            for (let i = 0; i < data.products.length; i++) {
                newProducts.push(data.products[i])
            }
            dispatch(productsResponse(newProducts))
        }
    }
}

export const productItemRequest = () => {

    return {
        type: ProductsEnumTypes.GET_PRODUCT_ITEM_REQUEST,
    }
}

export const productItemResponse = (product: ProductItem) => {
    return {
        type: ProductsEnumTypes.GET_PRODUCT_ITEM_RESPONSE,
        payload: product,
    }
}

export const productItemError = (error: string | undefined) => {
    return {
        type: ProductsEnumTypes.GET_PRODUCT_ITEM_ERROR,
        payload: error,
    }
}


export const getProductItem = (id: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(productItemRequest())
        const res = await ProductService.getProductById(id)
        if (res.error) {
            dispatch(productItemError(res.error))
        } else if (res.product !== undefined) {
            dispatch(productItemResponse(res.product))
        }
    }
}

export const storageProductsRequest = () => {

    return {
        type: ProductsEnumTypes.GET_STORAGE_PRODUCT_REQUEST,
    }
}

export const storageProductsResponse = (products: ProductItem) => {
    return {
        type: ProductsEnumTypes.GET_STORAGE_PRODUCT_RESPONSE,
        payload: products,
    }
}

export const storageProductsError = (error: string | undefined) => {
    return {
        type: ProductsEnumTypes.GET_STORAGE_PRODUCT_ERROR,
        payload: error,
    }
}

export const getStorageProducts = (storageId: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(storageProductsRequest())
        const res = await ProductService.getProductByStorageId(storageId)
        if (res.error) {
            dispatch(storageProductsError(res.error))
        } else if (res.products !== undefined) {
            dispatch(storageProductsResponse(res.products))
        }
    }
}
