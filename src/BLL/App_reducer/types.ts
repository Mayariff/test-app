import {initialState, setAppError, setAppStatus} from "./app-reducer";

export type InitialStateType = typeof initialState
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type ActionsType = ReturnType<typeof setAppError> | ReturnType<typeof setAppStatus>

export const setStatus = 'APP/SET-STATUS'
export const setError = 'APP/SET-ERROR'