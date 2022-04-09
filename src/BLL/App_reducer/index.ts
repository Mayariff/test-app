import * as appSelectors from './selectors'
import {RequestStatusType as T1} from './types'
import {appReducer as AppReducer, setAppError, setAppStatus} from './app-reducer';


const appReducer = AppReducer

const appActions = {
    setAppError,
    setAppStatus
}
export type RequestStatusType = T1


export {
    appSelectors,
    appReducer,
    appActions,
}
