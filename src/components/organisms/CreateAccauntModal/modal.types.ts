import { IAccounts } from "../../../store/redusers/main/types"

export interface IAccauntCreateModal {
    setModal: () => void
    editeMode: boolean | IAccounts
}
