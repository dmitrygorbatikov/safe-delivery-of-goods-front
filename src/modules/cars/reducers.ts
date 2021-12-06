import { AnyAction } from 'redux'
import {CarEnumTypes, CarItem} from "./types";

interface CarsState {
    error?: string
    carsListLoading: boolean
    carItemLoading: boolean
    storageCarsLoading: boolean
    cars: CarItem[]
    carItem?: CarItem
    storageCars: CarItem[]
}

const initState: CarsState = {
    carsListLoading: false,
    carItemLoading: false,
    storageCarsLoading:false,
    cars: [],
    storageCars: []
}

function carsReducer(state = initState, action: AnyAction): CarsState {
    switch (action.type) {
        /**GET CARS */
        case CarEnumTypes.GET_CARS_REQUEST:
            return {
                ...state,
                carsListLoading: true,
            }
        case CarEnumTypes.GET_CARS_RESPONSE:
            return {
                ...state,
                cars: action.payload,
                carsListLoading: false,
            }
        case CarEnumTypes.GET_CARS_ERROR:
            return {
                ...state,
                carsListLoading: false,
                error: action.payload,
            }
        /**POST CARS */
        case CarEnumTypes.POST_CAR_REQUEST:
            return {
                ...state,
            }
        case CarEnumTypes.POST_CAR_RESPONSE:
            return {
                ...state,
                cars: action.payload,
            }
        case CarEnumTypes.POST_CAR_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        /**GET CAR ITEM */

        case CarEnumTypes.GET_CAR_ITEM_REQUEST:
            return {
                ...state,
                carItemLoading: true
            }
        case CarEnumTypes.GET_CAR_ITEM_RESPONSE:
            return {
                ...state,
                carItem: action.payload,
                carItemLoading: false
            }
        case CarEnumTypes.GET_CAR_ITEM_ERROR:
            return {
                ...state,
                error: action.payload,
                carItemLoading: false
            }
        case CarEnumTypes.GET_STORAGE_CARS_REQUEST:
            return {
                ...state,
                storageCarsLoading: true
            }
        case CarEnumTypes.GET_STORAGE_CARS_RESPONSE:
            return {
                ...state,
                storageCars: action.payload,
                storageCarsLoading: false
            }
        case CarEnumTypes.GET_STORAGE_CARS_ERROR:
            return {
                ...state,
                error: action.payload,
                storageCarsLoading: false
            }
        default:
            return state
    }
}
export default carsReducer
