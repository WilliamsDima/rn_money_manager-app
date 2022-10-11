import { ITransaction } from "../../../store/redusers/main/types"

export interface IHistoryInfo {
    close: () => void
    data: ITransaction
}
