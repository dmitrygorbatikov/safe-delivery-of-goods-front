import {RootState} from "../root/store";
import {ProductItem} from "./types";

export const productsSelector = (state: RootState) => state.product.products as ProductItem[]
export const storageProductsSelector = (state: RootState) => state.product.storageProducts as ProductItem[]
export const productItemSelector = (state: RootState) => state.product.productItem as ProductItem
export const getProductsLoadingSelector = (state: RootState) => state.product.productListLoading as boolean
export const getProductItemLoadingSelector = (state: RootState) => state.product.productItemLoading as boolean
export const getStorageProductsLoadingSelector = (state: RootState) => state.product.storageProductLoading as boolean
