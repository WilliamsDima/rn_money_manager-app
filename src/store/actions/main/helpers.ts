import { IAccounts, ICategories, ITransaction } from "../../redusers/main/types"

export const countCategories = (categories: ICategories[], payload: ITransaction) => {
    return categories.map((cat) => {
        if(cat.id === payload.categori) {
            cat.count += +payload.count
        }
        return cat
    })
}

export const countCategoriesChange = (categories: ICategories[], 
    payload: ITransaction, prevTransaction: ITransaction) => {

    return categories.map((cat) => {
        if(cat.id === prevTransaction.categori) {
            cat.count -= prevTransaction.count
        }

        if(cat.id === payload.categori) {   
            cat.count += +payload.count
        }

        return cat
    })
}

export const countAccountsChange = (accounts: IAccounts[], 
    payload: ITransaction, prevTransaction: ITransaction) => {

    const isChangeAccount = payload.accounts !== prevTransaction.accounts
    const isIncom = payload.income

    return accounts.map((ac) => {
        if (isChangeAccount && !isIncom) {

            if(ac.id === prevTransaction.accounts) {
                ac.count += prevTransaction.count  
            }

            if (ac.id === payload.accounts) {
                ac.count -= +payload.count
            }
        }

        if (isChangeAccount && isIncom) {
            
            if(ac.id === prevTransaction.accounts) {
                ac.count -= prevTransaction.count  
            }

            if (ac.id === payload.accounts) {
                ac.count += +payload.count
            }
        }

        if (!isChangeAccount && !isIncom) {
            if(ac.id === payload.accounts) {

                if (prevTransaction.count > payload.count) {
                    ac.count += prevTransaction.count - payload.count
                }

                if (prevTransaction.count < payload.count) {
                    ac.count -= payload.count - prevTransaction.count
                }
            }
        }

        if (!isChangeAccount && isIncom) {

            if(ac.id === prevTransaction.accounts) {
                ac.count -= prevTransaction.count
                ac.count += payload.count
            }
        }
        return ac
    })
}

export const changeTransaction = (transaction: ITransaction[], payload: ITransaction) => {
    return transaction.map((tr) => {
        if(tr.id === payload.id) {
            tr.accounts = payload.accounts
            tr.categori = payload.categori
            tr.count = payload.count
            tr.date = payload.date
            tr.text = payload.text
        }
        return tr
    })
}

export const countAccaunts = (accounts: IAccounts[], payload: ITransaction) => {
    return accounts.map((ac) => {
        if(ac.id === payload.accounts) {
            ac.count = +(payload.income ? +ac.count + +payload.count 
            : +ac.count - +payload.count).toFixed(2)
        }
        return ac
    })
}

export const countAccauntsTransaction = (accounts: IAccounts[], payload: ITransaction) => {
    return accounts.map((ac) => {
        if(ac.id === payload.accounts[0]) {
            ac.count = +(ac.count - payload.count).toFixed(2)
        }
        if(ac.id === payload.accounts[1]) {
            ac.count = +(ac.count + +payload.count).toFixed(2)
        }
        return ac
    })
}

export const editeAccauntHandler = (accounts: IAccounts[], payload: IAccounts) => {
    return accounts.map((ac) => {
        if (payload.id === ac.id) {
            ac.name = payload.name
            ac.count = payload.count
            ac.bg = payload.bg
            ac.icon = payload.icon
        }
        return ac
    })
}

export const deleteAccountHandler = (accounts: IAccounts[], payload) => {
    return accounts.map((ac) => {
        if (ac.id === 1) {
            ac.count = ac.count + +payload.count
        }
        return ac
    })
}

export const deleteTransactionHandler = (categories: ICategories[], 
    payload: ITransaction) => {

    return categories.map((cat) => {
        if (cat.id === payload.categori) {
            cat.count -= payload.count
        }
        return cat
    })
}

export const deleteAccounTransactionHandler = (accounts: IAccounts[], 
    payload: ITransaction) => {
        
    return accounts.map((ac) => {
        if (payload.transaction) {

            if (ac.id === payload.accounts[0]) {
                ac.count += payload.count
            }

            if (ac.id === payload.accounts[1]) {
                ac.count -= payload.count
            }
        } else {

            if (ac.id === payload.accounts && !payload.income) {
                ac.count += payload.count
            }
            if (ac.id === payload.accounts && payload.income) {
                ac.count -= payload.count
            }
        }

        return ac
    })
}

export const editeCategoriHandler = (categories: ICategories[], payload: ICategories) => {
    return categories.map((cat) => {
        if (payload.id === cat.id) {
            cat.name = payload.name
            cat.bg = payload.bg
            cat.icon = payload.icon
            cat.income = payload.income
        }
        return cat
    })
}