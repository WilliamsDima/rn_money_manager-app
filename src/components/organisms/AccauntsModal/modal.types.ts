import { IAccounts } from "../../../store/redusers/main/types"

export interface IExpAndIncModal {
    close: () => void
    idSelect: number
    setId: () => void
    list: IAccounts[]
}
