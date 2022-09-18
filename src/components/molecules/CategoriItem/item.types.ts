import { ViewStyle, TouchableOpacity } from 'react-native'
import { ICategories } from '../../../store/redusers/main/types'

export interface ICategoriItem extends TouchableOpacity {
    categoriId: number | undefined
    setCategoriId: () => void
    overStyle?: ViewStyle
    size: number
    item: ICategories
}
