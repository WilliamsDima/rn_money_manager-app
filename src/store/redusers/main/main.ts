import { createSlice } from '@reduxjs/toolkit'
import { BURGER, BUS, CHARITY, EDUCATION, ENERGY, FAMILY, GAME, 
    GIFT, MEDIC, MONEY, MONEY_BAG, PIGGY_BANK, PRODUCTS, QUESTION, 
    REFUND, REFUND_REPO, SPORT, TAB_ACCAUNTS, WALLET } from '../../../services/iconsName';
import { reducers } from "../../actions/main/mainAC";
import { IStore } from './types';

const initialState: IStore = {
    sortData: [
    {title: 'День', value: 'Day'}, 
    {title: 'Неделя', value: 'Week'},
    {title: 'Месяц', value: 'Month'},
    {title: 'Год', value: 'Year'}],
    accountsIdSelected: 1,
    tabExpOrIncome: false,
    sort: 'Month',
    sortPeriod: null,
    sumMoneySort: 0,
    sumCategiesCountSort: 0,
    accounts: [
        {
            icon: MONEY_BAG,
            bg: 'red',
            name: (lang = true) => lang ? 'Всего': 'Engl version',
            id: 0,
            count: 0
        },
        {
            icon: TAB_ACCAUNTS,
            bg: '#004242',
            name: (lang = true) => lang ? 'Карта': 'Engl version',
            id: 1,
            count: 15000
        },
        {
            icon: WALLET,
            bg: '#3AC750',
            name: (lang = true) => lang ? 'Наличные': 'Engl version',
            id: 2,
            count: 5000
        },
        {
            icon: PIGGY_BANK,
            bg: '#318CE7',
            name: (lang = true) => lang ? 'Сбережения': 'Engl version',
            id: 3,
            count: 8000
        },
    ],

    categories: [
        {
            name: (lang = true) => lang ? 'Здоровье': 'Engl version',
            icon: MEDIC,
            bg: '#FA4442',
            id: 1,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'Транспорт': 'Engl version',
            icon: BUS,
            bg: '#4EA0E7',
            id: 2,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'Продукты': 'Engl version',
            icon: PRODUCTS,
            bg: '#6ED3CF',
            id: 3,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'Подарки': 'Engl version',
            icon: GIFT,
            bg: '#9BB592',
            id: 4,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'Кафе': 'Engl version',
            icon: BURGER,
            bg: '#F0CB50',
            id: 5,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'ЖКХ': 'Engl version',
            icon: ENERGY,
            bg: '#85D35C',
            id: 6,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'Спорт': 'Engl version',
            icon: SPORT,
            bg: '#84D161',
            id: 7,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'Образование': 'Engl version',
            icon: EDUCATION,
            bg: '#F4497D',
            id: 8,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'Семья': 'Engl version',
            icon: FAMILY,
            bg: '#FA4442',
            id: 9,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'Игры': 'Engl version',
            icon: GAME,
            bg: '#6BD3D0',
            id: 10,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'Благотворительность': 'Engl version',
            icon: CHARITY,
            bg: '#FA4442',
            id: 11,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'Другое': 'Engl version',
            icon: QUESTION,
            bg: '#FA4442',
            id: 12,
            count: 0,
            income: false,
        },
        {
            name: (lang = true) => lang ? 'Зарплата': 'Engl version',
            icon: TAB_ACCAUNTS,
            bg: '#FA4442',
            id: 13,
            count: 0,
            income: true,
        },
        {
            name: (lang = true) => lang ? 'Кэшбэк': 'Engl version',
            icon: REFUND,
            bg: '#4EA0E7',
            id: 14,
            count: 0,
            income: true,
        },
        {
            name: (lang = true) => lang ? 'Подарок': 'Engl version',
            icon: GIFT,
            bg: '#6ED3CF',
            id: 15,
            count: 0,
            income: true,
        },
        {
            name: (lang = true) => lang ? 'Возврат': 'Engl version',
            icon: REFUND_REPO,
            bg: '#9BB592',
            id: 16,
            count: 0,
            income: true,
        },
    ],
    expensesAndIncomes: [],
    transaction: [],
};

const counterSlice = createSlice({
    name: 'main',
    initialState,
    reducers: reducers,
})

export const mainReducer = (state = initialState, action) => {
    return counterSlice.reducer(state, action);
};

export const {setAllCauntAccaunts, addTransaction, 
    sumCategiesCount, setTabExpOrIncome, setSumMoneySort, setSortValue} = counterSlice.actions;