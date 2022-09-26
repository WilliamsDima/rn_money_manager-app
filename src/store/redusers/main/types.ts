export interface IAccounts {
    icon: string
    bg: string
    name: (lang1?: string) => string,
    id: number
    count: number
}

export interface ICategories {
    name: (lang1?: string) => string
    icon: string
    bg: string
    id: number
    count: number
    income: boolean
}

export interface IExpIncom {
    id: number
    count: string | number
    accounts: null | number
    categori: null | number
    date: Date
    text: string
    income: boolean
}

export interface ITransaction {
    id: number
    count: number,
    accauntsWay: [number | null, number | null]
    date: Date
    text: string
}

type TsortFilter = 'Day' | 'Week' | 'Month' | 'Year'

interface ISortData {
    title: string
    value: string
}

export interface IStore {
    sortData: ISortData[]
    accountsIdSelected: number
    tabExpOrIncome: boolean
    sort: TsortFilter
    sortPeriod: null | string
    sumMoneySort: number
    sumCategiesCountSort: number
    accounts: IAccounts[]
    categories: ICategories[]
    expensesAndIncomes: IExpIncom[],
    transaction: ITransaction[],
}