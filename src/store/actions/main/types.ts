import { PayloadAction } from "@reduxjs/toolkit"
import { IAccounts, ICategories, ITransaction, IStore, ICurrencySelect } from "../../redusers/main/types"

type filterPeriod = 'Day' | 'Week' | 'Month' | 'Year'

export const LOCAL_NAME =  {
    ACCAUNT_SELECT: 'accountsIdSelected',
    EPENSES_INCOME: 'transaction',
    CATEGORIES: 'categories',
    ACCAUNTS: 'accounts',
    POP: 'POP',
    PERIOD: 'PERIOD',
    CURRENCY_VALUE: 'CURRENCY_VALUE',
    LANGUAGE: 'LANGUAGE',
    RATE: 'RATE',
    THEME_APP: 'THEME_APP',
    DEVELOPER: 'DEVELOPER'
}

interface IDeleteAccaunt {
    id: number
    count: number
}

export interface IACMain {
    setDeveloperModeAC: (state: IStore, payload: PayloadAction<boolean>) => void
    setTabExpOrIncome: (state: IStore, payload: PayloadAction<boolean>) => void
    setAccauntId: (state: IStore, payload: PayloadAction<number>) => void
    setSumMoneySort: (state: IStore, payload: PayloadAction<number>) => void
    setAllCauntAccaunts: (state: IStore) => void
    addLocalExpAndIncome: (state: IStore, payload: PayloadAction<ITransaction[]>) => void
    addLocalCategories: (state: IStore, payload: PayloadAction<ICategories[]>) => void
    addLocalAccaunts: (state: IStore, payload: PayloadAction<IAccounts[]>) => void

    addAccaunt: (state: IStore, payload: PayloadAction<IAccounts>) => void
    editeAccaunt: (state: IStore, payload: PayloadAction<IAccounts>) => void
    deleteAccaunt: (state: IStore, payload: PayloadAction<IDeleteAccaunt>) => void

    addTransaction: (state: IStore, payload: PayloadAction<ITransaction>) => void
    deleteTransaction: (state: IStore, payload: PayloadAction<ITransaction>) => void

    sumCategiesCount: (state: IStore, payload: PayloadAction<ICategories[]>) => void
    setSortValue: (state: IStore, payload: PayloadAction<filterPeriod>) => void
    setSortDatePeriod: (state: IStore, payload: PayloadAction<Date>) => void
    setDataOnPeriodFilter: (state: IStore, payload: PayloadAction<ICategories[] | []>) => void

    addCategori: (state: IStore, payload: PayloadAction<ICategories>) => void
    editeCategori: (state: IStore, payload: PayloadAction<ICategories>) => void
    deleteCategori: (state: IStore, payload: PayloadAction<ICategories>) => void

    setCurrency: (state: IStore, payload: PayloadAction<ICurrencySelect>) => void
    setRate: (state: IStore, payload: PayloadAction<string[]>) => void

    setPop: (state: IStore, payload: PayloadAction<number>) => void

    setCurrencyValue: (state: IStore, payload: PayloadAction<string>) => void

    setLanguage: (state: IStore, payload: PayloadAction<string>) => void
    setThemeApp: (state: IStore, payload: PayloadAction<string>) => void
    
}