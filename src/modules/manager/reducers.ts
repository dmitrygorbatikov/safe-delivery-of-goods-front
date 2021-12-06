import { AnyAction } from 'redux'
import {ManagerEnumTypes, ManagerProfile} from "./types";

interface StoragesState {
    error?: string
    profileLoading: boolean
    profile?: ManagerProfile
}

const initState: StoragesState = {
    profileLoading: false,
}

function managerReducer(state = initState, action: AnyAction): StoragesState {
    switch (action.type) {
        case ManagerEnumTypes.GET_MANAGER_PROFILE_REQUEST:
            return {
                ...state,
                profileLoading: true,
            }
        case ManagerEnumTypes.GET_MANAGER_PROFILE_RESPONSE:
            return {
                ...state,
                profile: action.payload,
                profileLoading: false,
            }
        case ManagerEnumTypes.GET_MANAGER_PROFILE_ERROR:
            return {
                ...state,
                profileLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
export default managerReducer
