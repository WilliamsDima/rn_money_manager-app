import { ViewStyle } from "react-native";
import { IAccounts } from "../../../store/redusers/main/types";

export interface IAccauntsBtnSelect {
  overStyle?: ViewStyle
  data: IAccounts
  idSelect: number
  setAccauntsHandler: (id: number) => void
}
