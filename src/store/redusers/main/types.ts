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
}

export interface IExpIncom {
    id: number
    money: string
    accounts: null | number
    categori: null | number
    date: Date
    text: string
    income: boolean
}

export interface ITransaction {
    id: number
    money: number,
    accauntsWay: [number | null, number | null]
    date: Date
    text: string
}

export interface IStore {
    accountsIdSelected: number
    sort: string
    sortPeriod: null | string
    allCountSort: number
    allCategiesSort: number
    accounts: IAccounts[]
    categories: ICategories[]
    expenses: IExpIncom[],
    categoriesIncomes: ICategories[]
    transaction: ITransaction[],
    incomes: IExpIncom[]
}