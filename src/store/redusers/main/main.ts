import { createSlice } from '@reduxjs/toolkit'
import { BURGER, BUS, CHARITY, EDUCATION, ENERGY, FAMILY, GAME, 
    GIFT, MEDIC, MONEY, MONEY_BAG, PIGGY_BANK, PRODUCTS, QUESTION, 
    REFUND, REFUND_REPO, SPORT, TAB_ACCAUNTS, WALLET } from '../../../services/iconsName';
import { reducers } from "../../actions/main/mainAC";
import { IStore } from './types';

const initialState: IStore = {
    accountsIdSelected: 1,
    sort: 'Month',
    sortPeriod: null,
    allCountSort: 0,
    allCategiesSort: 0,

    accounts: [
        {
            icon: MONEY,
            bg: 'red',
            name: (lang) => lang ? 'Всего': 'Engl version',
            id: 0,
            count: 0
        },
        {
            icon: TAB_ACCAUNTS,
            bg: '#3A8050',
            name: (lang) => lang ? 'Карта': 'Engl version',
            id: 1,
            count: 15000
        },
        {
            icon: WALLET,
            bg: '#3AC750',
            name: (lang) => lang ? 'Наличка': 'Engl version',
            id: 2,
            count: 5000
        },
        {
            icon: PIGGY_BANK,
            bg: '#318CE7',
            name: (lang) => lang ? 'Сбережения': 'Engl version',
            id: 3,
            count: 8000
        },
    ],

    categories: [
        {
            name: (lang) => lang ? 'Здоровье': 'Engl version',
            icon: MEDIC,
            bg: '#FA4442',
            id: 1,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Транспорт': 'Engl version',
            icon: BUS,
            bg: '#4EA0E7',
            id: 2,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Продукты': 'Engl version',
            icon: PRODUCTS,
            bg: '#6ED3CF',
            id: 3,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Подарки': 'Engl version',
            icon: GIFT,
            bg: '#9BB592',
            id: 4,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Кафе': 'Engl version',
            icon: BURGER,
            bg: '#F0CB50',
            id: 5,
            count: 0,
        },
        {
            name: (lang) => lang ? 'ЖКХ': 'Engl version',
            icon: ENERGY,
            bg: '#85D35C',
            id: 6,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Спорт': 'Engl version',
            icon: SPORT,
            bg: '#84D161',
            id: 7,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Образование': 'Engl version',
            icon: EDUCATION,
            bg: '#F4497D',
            id: 8,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Семья': 'Engl version',
            icon: FAMILY,
            bg: '#FA4442',
            id: 9,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Игры': 'Engl version',
            icon: GAME,
            bg: '#6BD3D0',
            id: 10,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Благотворительность': 'Engl version',
            icon: CHARITY,
            bg: '#FA4442',
            id: 11,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Другое': 'Engl version',
            icon: QUESTION,
            bg: '#FA4442',
            id: 12,
            count: 0,
        },
    ],

    expenses: [],

    categoriesIncomes: [
        {
            name: (lang) => lang ? 'Зарплата': 'Engl version',
            icon: TAB_ACCAUNTS,
            bg: '#FA4442',
            id: 1,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Кэшбэк': 'Engl version',
            icon: REFUND,
            bg: '#4EA0E7',
            id: 2,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Подарок': 'Engl version',
            icon: GIFT,
            bg: '#6ED3CF',
            id: 3,
            count: 0,
        },
        {
            name: (lang) => lang ? 'Возврат': 'Engl version',
            icon: REFUND_REPO,
            bg: '#9BB592',
            id: 4,
            count: 0,
        },
    ],

    transaction: [],

    incomes: []
};

const counterSlice = createSlice({
    name: 'main',
    initialState,
    reducers: reducers,
})

export const mainReducer = (state = initialState, action) => {
    return counterSlice.reducer(state, action);
};

export const {countIncrementAC, countDiscrementAC} = counterSlice.actions;