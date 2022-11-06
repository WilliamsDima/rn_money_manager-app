export interface IAccounts {
    icon: string
    bg: string
    name: string,
    id: number
    count: number
    delete: boolean
    currency: string
}

export interface ICategories {
    name: string
    icon: string
    bg: string
    id: number
    count: number
    income: boolean
}

export interface ITransaction {
    id: number
    count: number,
    accounts: number | number[]
    categori: number | null
    date: Date
    text: string
    income: boolean
    transaction: boolean
    currency: string
}

type TsortFilter = 'Day' | 'Week' | 'Month' | 'Year'

export interface ISortData {
    title: string
    value: string
}

export interface ICurrencySelect {
    first: {
        code: string
        count: number
    }
    second: {
        code: string
        count: number
    }
}

export interface IStore {
    developerMode: boolean
    accountsIdSelected: number | string
    tabExpOrIncome: boolean
    sort: TsortFilter
    sortDatePeriod: Date
    sumMoneySort: number
    sumCategiesCountSort: number
    categoriesSortData: ICategories[] | []
    accounts: IAccounts[]
    categories: ICategories[]
    transaction: ITransaction[],
    currencySelect: string[]
    currency: ICurrencySelect| null
    currencyValue: string
    pop: number
    themeApp: string
    language: string
    languageData: ISortData[]
}