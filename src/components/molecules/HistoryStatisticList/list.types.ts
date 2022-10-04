import { ITransaction } from "../../../store/redusers/main/types";

export interface IHistory {
    data: ITransaction[]
    filterType: boolean | 'all'
}  
