import {ActionsType, InitialStateType, RequestStatusType, setError, setStatus} from './types';

export const initialState = {
    status: 'idle',
    error: null as string | null,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case setStatus :
            return {...state, status: action.status}
        case  setError:
            return {...state, error: action.error}
        default:
            return {...state}
    }
}
//action creators
export const setAppError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatus = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)

