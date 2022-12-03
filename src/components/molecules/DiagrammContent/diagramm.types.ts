import { ICategories } from './../../../store/redusers/main/types';

type data = {
    population: number,
    color: number,
    name?: string,
    legendFontColor?: string,
    legendFontSize?: number
}

export interface IDiogramma {
    hideDiogram: boolean
    sortArray: ICategories[]
    data: data[]
}
