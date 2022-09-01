import { ViewStyle } from "react-native";
import { JsxElement } from "typescript";

interface IData {
  bg: string
  count: number
  icon: string
  id: number
  name: () => string
}

export interface IAccauntsBtnSelect {
  overStyle?: ViewStyle
  data: IData
  idSelect: number
  setAccauntsHandler: (id: number) => void
}
