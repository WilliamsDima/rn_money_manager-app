import { ViewStyle } from "react-native"

export interface IButton{
  onPress?: () => void
  overStyle?: ViewStyle
  prevDate: Date
  date: Date
}
