import {RootState} from "../root/store";
import {DriverItem} from "./types";

export const driversSelector = (state: RootState) => state.driver.drivers as DriverItem[]
export const storageDriversSelector = (state: RootState) => state.driver.storageDrivers as DriverItem[]
export const driverItemSelector = (state: RootState) => state.driver.driverItem as DriverItem
export const getDriversLoadingSelector = (state: RootState) => state.driver.driverListLoading as boolean
export const getDriverItemLoadingSelector = (state: RootState) => state.driver.driverItemLoading as boolean
export const getStorageDriverLoadingSelector = (state: RootState) => state.driver.storageDriversLoading as boolean
