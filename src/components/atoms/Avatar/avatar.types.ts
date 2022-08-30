import { ViewStyle } from "react-native";
import { JsxElement } from "typescript";

export interface IAvatar {
  overStyle?: ViewStyle
  children: JsxElement
  bg: string
}
