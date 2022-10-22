import { ViewStyle } from 'react-native';
import { ISortData } from './../../../store/redusers/main/types';

export interface IPicker {
    close: () => void
    select: string
    changeValue: () => void
    list: ISortData[]
    overStyle?: ViewStyle
}
