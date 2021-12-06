export enum ManagerEnumTypes {
    GET_MANAGER_PROFILE_REQUEST = 'GET_MANAGER_PROFILE_REQUEST',
    GET_MANAGER_PROFILE_RESPONSE = 'GET_MANAGER_PROFILE_RESPONSE',
    GET_MANAGER_PROFILE_ERROR = 'GET_MANAGER_PROFILE_ERROR',
}

export interface ManagerProfile {
    _id: string
    name: string
    surname: string
    email: string
    password: string
    role: string
    registerDate: number
}