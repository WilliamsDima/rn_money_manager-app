import { ISortData } from './../../../store/redusers/main/types'
import { ViewStyle } from "react-native"

export interface IPickerItem {
  overStyle?: ViewStyle
  setValue: () => void
  select: ISortData[]
  item: ISortData
  disabled: boolean
}
