import {RootState} from "../root/store";
import {ManagerProfile} from "./types";

export const managerProfileSelector = (state: RootState) => state.manager.profile as ManagerProfile
export const getManagerProfileLoadingSelector = (state: RootState) => state.manager.profileLoading as boolean
