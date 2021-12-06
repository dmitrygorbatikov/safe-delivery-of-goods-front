import {Dispatch} from "redux";
import {ManagerEnumTypes, ManagerProfile} from "./types";
import ManagerService from "../../services/manager.service";

export const managerRequest = () => {

    return {
        type: ManagerEnumTypes.GET_MANAGER_PROFILE_REQUEST,
    }
}

export const managerProfileResponse = (profile: ManagerProfile) => {
    return {
        type: ManagerEnumTypes.GET_MANAGER_PROFILE_RESPONSE,
        payload: profile,
    }
}

export const managerProfileError = (error: string | undefined) => {
    return {
        type: ManagerEnumTypes.GET_MANAGER_PROFILE_ERROR,
        payload: error,
    }
}
export const getManagerProfile = () => {
    return async (dispatch: Dispatch) => {
        dispatch(managerRequest())
        const res = await ManagerService.getProfile()
        if (res.error) {
            dispatch(managerProfileError(res.error))
        } else if (res.manager !== undefined) {
            dispatch(managerProfileResponse(res.manager))
        }
    }
}

export const editManagerProfile = (body: {name: string, surname: string}) => {
    return async (dispatch: Dispatch) => {
        const res = await ManagerService.editProfile(body)
        if (res.error) {
            dispatch(managerProfileError(res.error))
        } else if (res.manager !== undefined) {
            dispatch(managerProfileResponse(res.manager))
        }
    }
}