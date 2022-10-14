export interface IAccounts {
    icon: string
    bg: string
    name: string,
    id: number
    count: number
    delete: boolean
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
}

type TsortFilter = 'Day' | 'Week' | 'Month' | 'Year'

interface ISortData {
    title: string
    value: string
}

export interface IStore {
    sortData: ISortData[]
    accountsIdSelected: number | string
    tabExpOrIncome: boolean
    sort: TsortFilter
    sortDatePeriod: null | Date
    sumMoneySort: number
    sumCategiesCountSort: number
    categoriesSortData: ICategories[] | []
    accounts: IAccounts[]
    categories: ICategories[]
    transaction: ITransaction[],
    currencySelect: string
    currency: {} | null
    currencies: string[]
}