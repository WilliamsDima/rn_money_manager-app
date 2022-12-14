import { localAPI } from "../../../api/asyncStorage"
import { countSumItemsFromList, dataFilterMaxValue, getItemFromList } from "../../../hooks/helpers"
import { changeTransaction, countAccaunts, countAccauntsTransaction, 
    countAccountsChange, countCategories, countCategoriesChange, 
    deleteAccountHandler, deleteAccounTransactionHandler, deleteTransactionHandler, editeAccauntHandler, editeCategoriHandler } from "./helpers"
import { IACMain, LOCAL_NAME } from "./types"

export const reducers: IACMain = {
    setDeveloperModeAC:(state, { payload }) => {
        state.developerMode = payload
        localAPI.set(LOCAL_NAME.DEVELOPER, state.developerMode)
    },
    setPop: (state, {payload}) => {
        state.pop = payload
        localAPI.set(LOCAL_NAME.POP, state.pop)
    },
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
                ac.count = sum.toFixed(2)
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

    addAccaunt: (state, { payload }) => {
        state.accounts.push(payload)
        localAPI.set(LOCAL_NAME.ACCAUNTS, state.accounts)
    },

    deleteAccaunt: (state, { payload }) => {
        state.accounts = state.accounts.filter((ac) => ac.id !== payload.id)

        state.accounts = deleteAccountHandler(state.accounts, payload)

        if (state.accountsIdSelected === payload.id) {
            state.accountsIdSelected = 1
            localAPI.set(LOCAL_NAME.ACCAUNT_SELECT, 1)
        }
        localAPI.set(LOCAL_NAME.ACCAUNTS, state.accounts)
    },

    editeAccaunt: (state, { payload }) => {

        state.accounts = editeAccauntHandler(state.accounts, payload)
        localAPI.set(LOCAL_NAME.ACCAUNTS, state.accounts)
    },

    addTransaction: (state, { payload }) => {

        const isTransaction = getItemFromList(payload.id, state.transaction)

        if (!isTransaction) {

            state.transaction.push(payload)

            if (!payload.transaction) {
                state.categories = countCategories(state.categories, payload)
                state.accounts = countAccaunts(state.accounts, payload)
            }
           
            if (payload.transaction) {
                state.accounts = countAccauntsTransaction(state.accounts, payload)
            }
        }

        if (isTransaction && !payload.transaction) {
            state.categories = countCategoriesChange(state.categories, payload, isTransaction)
            state.accounts = countAccountsChange(state.accounts, payload, isTransaction)
            state.transaction = changeTransaction(state.transaction, payload)
        }

        state.categories = dataFilterMaxValue(state.categories, true)

        localAPI.set(LOCAL_NAME.EPENSES_INCOME, state.transaction)
        localAPI.set(LOCAL_NAME.CATEGORIES, state.categories)
        localAPI.set(LOCAL_NAME.ACCAUNTS, state.accounts)
    },
    deleteTransaction: (state, { payload }) => {

        state.transaction = state.transaction.filter((ac) => ac.id !== payload.id)
        state.categories = deleteTransactionHandler(state.categories, payload)
        state.accounts = deleteAccounTransactionHandler(state.accounts, payload)

        state.categories = dataFilterMaxValue(state.categories, true)

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

    addCategori: (state, {payload}) => {

        state.categories.push(payload)

        localAPI.set(LOCAL_NAME.CATEGORIES, state.categories)
    },

    editeCategori: (state, { payload }) => {

        state.categories = editeCategoriHandler(state.categories, payload)
        localAPI.set(LOCAL_NAME.CATEGORIES, state.categories)
    },

    deleteCategori: (state, { payload }) => {
        state.categories = state.categories.filter((ac) => ac.id !== payload.id)

        localAPI.set(LOCAL_NAME.CATEGORIES, state.categories)
    },

    setCurrency:(state, { payload }) => {
        state.currency = payload
    },

    setRate:(state, { payload }) => {
        state.currencySelect = payload
        localAPI.set(LOCAL_NAME.RATE, state.currencySelect)
    },

    setCurrencyValue:(state, { payload }) => {
        state.currencyValue = payload
    },

    setLanguage:(state, { payload }) => {
        state.language = payload
        localAPI.set(LOCAL_NAME.LANGUAGE, state.language)
    },

    setThemeApp:(state, { payload }) => {
        state.themeApp = payload
        localAPI.set(LOCAL_NAME.THEME_APP, state.themeApp)
    },
};
