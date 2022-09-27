import { ViewStyle,TouchableOpacity } from "react-native"

export interface IButton extends TouchableOpacity {
  onPress?: () => void
  disabled?: boolean
  overStyle?: ViewStyle
}
