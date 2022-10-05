import { IAccounts } from "../../../store/redusers/main/types"

export interface IPickerCategory {
    close: () => void
    value: number | null
    setId: () => void
}
