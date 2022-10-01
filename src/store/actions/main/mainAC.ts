import { localAPI } from "../../../api/asyncStorage";
import { countSumItemsFromList } from "../../../hooks/helpers"
import { IACMain, LOCAL_NAME } from "./types"

export const reducers: IACMain = {
    setTabExpOrIncome: (state, {payload}) => {
        state.tabExpOrIncome = payload
    },
    setAccauntId: (state, {payload}) => {
        state.accountsIdSelected = payload
        localAPI.set(LOCAL_NAME.ACCAUNT_SELECT, payload)
    },
    setSumMoneySort: (state, {payload}) => {
        state.sumMoneySort = payload
    },
    setAllCauntAccaunts: (state) => {
        const sum = countSumItemsFromList(state.accounts)

        state.accounts = state.accounts.map((ac) => {
            if(ac.id === 0) {
                ac.count = sum
            }
            return ac
        })
    },

    addLocalExpAndIncome:(state, { payload }) => {
        state.expensesAndIncomes = payload
    },

    addLocalCategories:(state, { payload }) => {
        state.categories = payload
    },

    addLocalAccaunts:(state, { payload }) => {
        state.accounts = payload
    },

    addTransaction: (state, { payload }) => {

        state.expensesAndIncomes.push(payload.data)

        localAPI.set(LOCAL_NAME.EPENSES_INCOME, state.expensesAndIncomes)

        if (!payload.transaction) {
            state.categories = state.categories.map((cat) => {
                if(cat.id === payload.data.categori) {
                    cat.count += +payload.data.count
                }
                return cat
            })

            state.accounts = state.accounts.map((ac) => {
                if(ac.id === payload.data.accounts) {
                    ac.count = payload.data.income ? +ac.count + +payload.data.count 
                    : +ac.count - +payload.data.count 
                }
                return ac
            })

            localAPI.set(LOCAL_NAME.CATEGORIES, state.categories)
            localAPI.set(LOCAL_NAME.ACCAUNTS, state.accounts)
        }
    },
    sumCategiesCount: (state, { payload }) => {
        const sum = countSumItemsFromList(payload)
        state.sumCategiesCountSort = sum
    },
    setSortValue: (state, {payload}) => {
        state.sort = payload
    },
    setSortDatePeriod: (state, {payload}) => {
        state.sortDatePeriod = payload
    },
    setDataOnPeriodFilter: (state, {payload}) => {
        state.categoriesSortData = payload
    },
};
