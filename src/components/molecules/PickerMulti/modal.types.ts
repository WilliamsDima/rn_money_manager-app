import { ISortData } from './../../../store/redusers/main/types'

export interface IPickerMulti {
    close: () => void
    select: ISortData[]
    submit: () => void
    data: ISortData[]
    maxMinSelect?: number
}
