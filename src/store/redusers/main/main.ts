import { createSlice } from '@reduxjs/toolkit'
import { BURGER, BUS, CHARITY, EDUCATION, ENERGY, FAMILY, GAME, 
    GIFT, MEDIC, MONEY, MONEY_BAG, PIGGY_BANK, PRODUCTS, QUESTION, 
    REFUND, REFUND_REPO, SPORT, TAB_ACCAUNTS, WALLET } from '../../../services/iconsName'
import { reducers } from "../../actions/main/mainAC"
import { IStore } from './types'

const initialState: IStore = {
    sortData: [
    {title: 'День', value: 'Day'}, 
    {title: 'Неделя', value: 'Week'},
    {title: 'Месяц', value: 'Month'},
    {title: 'Год', value: 'Year'}],
    accountsIdSelected: 1,
    tabExpOrIncome: false,
    sort: 'Month',
    sortDatePeriod: null,
    sumMoneySort: 0,
    sumCategiesCountSort: 0,
    categoriesSortData: [],
    accounts: [
        {
            icon: MONEY_BAG,
            bg: 'red',
            name: 'Всего',
            id: 0,
            count: 0
        },
        {
            icon: TAB_ACCAUNTS,
            bg: '#004242',
            name: 'Карта',
            id: 1,
            count: 15000
        },
        {
            icon: WALLET,
            bg: '#3AC750',
            name: 'Наличные',
            id: 2,
            count: 5000
        },
        {
            icon: PIGGY_BANK,
            bg: '#318CE7',
            name: 'Сбережения',
            id: 3,
            count: 8000
        },
    ],

    categories: [
        {
            name: 'Здоровье',
            icon: MEDIC,
            bg: '#FA4442',
            id: 1,
            count: 0,
            income: false,
        },
        {
            name: 'Транспорт',
            icon: BUS,
            bg: '#4EA0E7',
            id: 2,
            count: 0,
            income: false,
        },
        {
            name: 'Продукты',
            icon: PRODUCTS,
            bg: '#6ED3CF',
            id: 3,
            count: 0,
            income: false,
        },
        {
            name: 'Подарки',
            icon: GIFT,
            bg: '#9BB592',
            id: 4,
            count: 0,
            income: false,
        },
        {
            name: 'Кафе',
            icon: BURGER,
            bg: '#F0CB50',
            id: 5,
            count: 0,
            income: false,
        },
        {
            name: 'ЖКХ',
            icon: ENERGY,
            bg: '#85D35C',
            id: 6,
            count: 0,
            income: false,
        },
        {
            name: 'Спорт',
            icon: SPORT,
            bg: '#84D161',
            id: 7,
            count: 0,
            income: false,
        },
        {
            name: 'Образование',
            icon: EDUCATION,
            bg: '#F4497D',
            id: 8,
            count: 0,
            income: false,
        },
        {
            name: 'Семья',
            icon: FAMILY,
            bg: '#FA4442',
            id: 9,
            count: 0,
            income: false,
        },
        {
            name: 'Игры',
            icon: GAME,
            bg: '#6BD3D0',
            id: 10,
            count: 0,
            income: false,
        },
        {
            name: 'Благотворительность',
            icon: CHARITY,
            bg: '#FA4442',
            id: 11,
            count: 0,
            income: false,
        },
        {
            name: 'Другое',
            icon: QUESTION,
            bg: '#FA4442',
            id: 12,
            count: 0,
            income: false,
        },
        {
            name: 'Зарплата',
            icon: TAB_ACCAUNTS,
            bg: '#FA4442',
            id: 13,
            count: 0,
            income: true,
        },
        {
            name: 'Кэшбэк',
            icon: REFUND,
            bg: '#4EA0E7',
            id: 14,
            count: 0,
            income: true,
        },
        {
            name: 'Подарок',
            icon: GIFT,
            bg: '#6ED3CF',
            id: 15,
            count: 0,
            income: true,
        },
        {
            name: 'Возврат',
            icon: REFUND_REPO,
            bg: '#9BB592',
            id: 16,
            count: 0,
            income: true,
        },
    ],
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
    sumCategiesCount, setTabExpOrIncome, setSumMoneySort, 
    setSortValue, setSortDatePeriod, addLocalCategories,
    addLocalAccaunts, 
    setDataOnPeriodFilter, setAccauntId, addLocalExpAndIncome } = counterSlice.actions;