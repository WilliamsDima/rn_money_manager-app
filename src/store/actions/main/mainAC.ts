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
        state.transaction = payload
    },

    addLocalCategories:(state, { payload }) => {
        state.categories = payload
    },

    addLocalAccaunts:(state, { payload }) => {
        state.accounts = payload
    },

    addTransaction: (state, { payload }) => {

        state.transaction.push(payload)

        if (!payload.transaction) {
            state.categories = state.categories.map((cat) => {
                if(cat.id === payload.categori) {
                    cat.count += +payload.count
                }
                return cat
            })

            state.accounts = state.accounts.map((ac) => {
                if(ac.id === payload.accounts) {
                    ac.count = payload.income ? +ac.count + +payload.count 
                    : +ac.count - +payload.count 
                }
                return ac
            })
        }

        if (payload.transaction) {
            // ПЕРЕВОД С ОДНОГО СЧЁТА НА ДРУГОЙ
        }

        localAPI.set(LOCAL_NAME.EPENSES_INCOME, state.transaction)
        localAPI.set(LOCAL_NAME.CATEGORIES, state.categories)
        localAPI.set(LOCAL_NAME.ACCAUNTS, state.accounts)
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
