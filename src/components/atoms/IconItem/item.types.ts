import { ViewStyle, TouchableOpacity } from 'react-native'

export interface IIconItem extends TouchableOpacity {
    idSelect: string
    setId: () => void
    overStyle?: ViewStyle
    size: number
    iconName: string
    bg: string
}
