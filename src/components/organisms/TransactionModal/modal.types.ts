import { ITransaction } from "../../../store/redusers/main/types"

export interface IExpAndIncModal {
    setModal: () => void
    data?: ITransaction
}
