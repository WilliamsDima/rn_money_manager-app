import { ViewStyle } from "react-native"

export interface IButton {
    children?: JSX.Element
    onPress?: () => void
    overStyle?: ViewStyle
}
