import { IAccounts } from "../../../store/redusers/main/types"

export interface IPickerCategory {
    close: () => void
    value: number [] | undefined []
    setId: () => void
}
