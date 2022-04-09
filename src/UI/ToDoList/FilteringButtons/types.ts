import {RequestStatusType} from "../../../BLL/App_reducer";
import {activeFilterType} from "../../../APP";

export type FilteringButtonsType={
    status: RequestStatusType,
    setActiveFilter:(activeFilter: activeFilterType)=>void
}