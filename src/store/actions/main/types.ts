import { PayloadAction } from "@reduxjs/toolkit"
import { ICategories, IExpIncom, IStore } from "../../redusers/main/types"

type filterPeriod = 'Day' | 'Week' | 'Month' | 'Year'

export interface IACMain {
    setTabExpOrIncome: (state: IStore, payload: PayloadAction<boolean>) => void
    setSumMoneySort: (state: IStore, payload: PayloadAction<number>) => void
    setAllCauntAccaunts: (state: IStore) => void
    addTransaction: (state: IStore, payload: PayloadAction<IExpIncom>, 
        transaction: boolean | undefined) => void
    sumCategiesCount: (state: IStore, payload: PayloadAction<ICategories[]>) => void
    setSortValue: (state: IStore, payload: PayloadAction<filterPeriod>) => void
}