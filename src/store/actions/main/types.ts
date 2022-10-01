import { PayloadAction } from "@reduxjs/toolkit"
import { IAccounts, ICategories, IExpIncom, IStore } from "../../redusers/main/types"

type filterPeriod = 'Day' | 'Week' | 'Month' | 'Year'

export const LOCAL_NAME =  {
    ACCAUNT_SELECT: 'accountsIdSelected',
    EPENSES_INCOME: 'expensesAndIncomes',
    CATEGORIES: 'categories',
    ACCAUNTS: 'accounts',
}

interface IAddTransaction {
    data: IExpIncom
    transaction?: boolean | undefined
} 

export interface IACMain {
    setTabExpOrIncome: (state: IStore, payload: PayloadAction<boolean>) => void
    setAccauntId: (state: IStore, payload: PayloadAction<number>) => void
    setSumMoneySort: (state: IStore, payload: PayloadAction<number>) => void
    setAllCauntAccaunts: (state: IStore) => void
    addLocalExpAndIncome: (state: IStore, payload: PayloadAction<IExpIncom[]>) => void
    addLocalCategories: (state: IStore, payload: PayloadAction<ICategories[]>) => void
    addLocalAccaunts: (state: IStore, payload: PayloadAction<IAccounts[]>) => void
    addTransaction: (state: IStore, payload: PayloadAction<IAddTransaction>) => void
    sumCategiesCount: (state: IStore, payload: PayloadAction<ICategories[]>) => void
    setSortValue: (state: IStore, payload: PayloadAction<filterPeriod>) => void
    setSortDatePeriod: (state: IStore, payload: PayloadAction<Date>) => void
    setDataOnPeriodFilter: (state: IStore, payload: PayloadAction<ICategories[] | []>) => void
}