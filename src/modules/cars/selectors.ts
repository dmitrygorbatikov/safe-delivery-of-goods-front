import {RootState} from "../root/store";
import {CarItem, CarsIot} from "./types";

export const carsSelector = (state: RootState) => state.cars.cars as CarItem[]
export const storageCarsSelector = (state: RootState) => state.cars.storageCars as CarItem[]
export const carItemSelector = (state: RootState) => state.cars.carItem as CarItem
export const getCarsLoadingSelector = (state: RootState) => state.cars.carsListLoading as boolean
export const getCarItemLoadingSelector = (state: RootState) => state.cars.carItemLoading as boolean
export const getStorageCarLoadingSelector = (state: RootState) => state.cars.storageCarsLoading as boolean
export const carsIOTSelector = (state: RootState) => state.cars.carsIOT as CarsIot
