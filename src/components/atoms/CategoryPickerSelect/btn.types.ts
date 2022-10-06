import { ViewStyle } from "react-native"
import { ICategories } from "../../../store/redusers/main/types"

export interface ICategorySelect {
  overStyle?: ViewStyle
  data: ICategories
  setIdSelect: () => void
  idSelect: number[] | undefined[]
}
