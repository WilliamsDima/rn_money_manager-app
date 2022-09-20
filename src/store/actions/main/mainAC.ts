import { countSumItemsFromList } from "../../../hooks/helpers"
import { IACMain } from "./types"

export const reducers: IACMain = {
    setTabExpOrIncome: (state, {payload}) => {
        state.tabExpOrIncome = payload
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
    addTransaction: (state, { payload }, transaction) => {
        state.expensesAndIncomes.push(payload)

        if (!transaction) {
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
    },
    sumCategiesCount: (state, { payload }) => {
        const sum = countSumItemsFromList(payload)
        state.sumCategiesCountSort = sum
    },
};
