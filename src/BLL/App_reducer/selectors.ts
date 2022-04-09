import {RequestStatusType} from "./index";
import {AppRootStateType} from "../../APP/store";

export const selectStatus = (state: AppRootStateType) => state.app.status as RequestStatusType
export const selectError = (state: AppRootStateType) => state.app.error