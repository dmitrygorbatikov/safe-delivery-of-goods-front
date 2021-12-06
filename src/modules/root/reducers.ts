import { combineReducers } from 'redux'
import authReducer from "../auth/reducers";
import storagesReducer from "../storages/reducers";
import managerReducer from "../manager/reducers";
import carsReducer from "../cars/reducers";
import driversReducer from "../drivers/reducers";
import productsReducer from "../products/reducers";
import shippingReducer from "../shipping/reducers";

const rootReducer = combineReducers({
    auth: authReducer,
    storages: storagesReducer,
    manager: managerReducer,
    cars: carsReducer,
    driver: driversReducer,
    product: productsReducer,
    shipping: shippingReducer
})

export default rootReducer