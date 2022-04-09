import {zadachiType} from '../../BLL/TodoList_reducer';
import {RequestStatusType} from "../../BLL/App_reducer";

export type TodoListType = {
    id?: string
    status: RequestStatusType
    value: string
    zadachi: Array<zadachiType>
    clickCheckBox: (id: string, active: boolean) => void
    clickRemoveBtn: (id: string) => void
}

export type zadachaPropsType = {
    task: zadachiType
    clickCheckBox: (id: string, active: boolean) => void
    clickRemoveBtn: (id: string) => void
}