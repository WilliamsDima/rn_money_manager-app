import { ViewStyle } from "react-native";

export interface IPickerItem {
  overStyle?: ViewStyle
  value: string
  label: string
  select: string
  changeValue: () => void
}
