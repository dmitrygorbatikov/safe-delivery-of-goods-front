import {Dispatch} from "redux";
import {createNewShippingProps, getShippingProps, ShippingEnumTypes, ShippingItem} from "./types";
import ShippingService from "../../services/shipping.service";

export const shippingRequest = () => {
    return {
        type: ShippingEnumTypes.GET_SHIPPING_REQUEST,
    }
}

export const shippingResponse = (shipping: ShippingItem[]) => {
    return {
        type: ShippingEnumTypes.GET_SHIPPING_RESPONSE,
        payload: shipping,
    }
}

export const shippingError = (error: string | undefined) => {
    return {
        type: ShippingEnumTypes.GET_SHIPPING_ERROR,
        payload: error,
    }
}


export const getShipping = (data: getShippingProps) => {
    return async (dispatch: Dispatch) => {
        dispatch(shippingRequest())
        const res = await ShippingService.shipping(data)
        if (res.error) {
            dispatch(shippingError(res.error))
        } else if (res.shipping !== undefined) {
            dispatch(shippingResponse(res.shipping))
        }
    }
}

export const postShippingRequest = () => {
    return {
        type: ShippingEnumTypes.POST_SHIPPING_REQUEST,
    }
}

export const postShippingError = (error: string | undefined) => {
    return {
        type: ShippingEnumTypes.POST_SHIPPING_ERROR,
        payload: error,
    }
}

export const postShippingItem = (data: createNewShippingProps) => {
    return async (dispatch: Dispatch) => {
        dispatch(postShippingRequest())
        const res = await ShippingService.createShipping(data)
        if (res.error) {
            dispatch(postShippingError(res.error))
        } else if (res.shipping !== undefined) {
            const newShipping: ShippingItem[] = []
            data.shipping.push(res.shipping)
            for (let i = 0; i < data.shipping.length; i++) {
                newShipping.push(data.shipping[i])
            }
            dispatch(shippingResponse(newShipping))
        }
    }
}