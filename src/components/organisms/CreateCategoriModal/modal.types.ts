import { ICategories } from "../../../store/redusers/main/types"

export interface IAccauntCreateModal {
    setModal: () => void
    editeMode: ICategories | boolean
}
