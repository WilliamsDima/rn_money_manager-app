import { ViewStyle } from "react-native"

export interface IFilterBtnSelect {
  overStyle?: ViewStyle
  data: {
    id: number
    title: string
    value: boolean | string
  }
  setValue: () => void
  isValue: number | string
}
