import {RootState} from "../root/store";
import {StoragesIot, StoragesItem} from "./types";

export const storagesSelector = (state: RootState) => state.storages.storages as StoragesItem[]
export const storageItemSelector = (state: RootState) => state.storages.storageItem as StoragesItem
export const getStoragesLoadingSelector = (state: RootState) => state.storages.storageListLoading as boolean
export const getStorageItemLoadingSelector = (state: RootState) => state.storages.storageItemLoading as boolean
export const storagesIotSelector = (state: RootState) => state.storages.storagesIot as StoragesIot
