import {RequestStatusType} from "../../../BLL/App_reducer";
import {ChangeEventHandler, MouseEventHandler} from "react";

export type AddingFieldPropsType= {
    status: RequestStatusType
    onEnterHandler: () => void
    onClickAddHandler: MouseEventHandler<HTMLButtonElement>
    inputText: string
    onchangeHandler: ChangeEventHandler<HTMLInputElement>
    error:string|null
}
