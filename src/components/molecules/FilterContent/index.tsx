import React, { FC, useEffect } from 'react'
import { View } from 'react-native'
import { countSumItemsFromList, getSortCategories, periodSort } from '../../../hooks/helpers'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { setDataOnPeriodFilter, setSumMoneySort } from '../../../store/redusers/main/main'
import AddBtn from '../../atoms/AddBtn'
import Diogramma from '../../atoms/Diogramma'
import FilterPeriod from '../../atoms/FilterPeriod'
import CarouselFilter from '../CarouselFilter'
import { styles } from './filter.styles'

interface IFilter {
  setExpAndEncomeModal: () => void
  hideDiogram: boolean
}

const FilterContent: FC<IFilter> = React.memo(({setExpAndEncomeModal, hideDiogram}) => {

  const dispatch = useAppDispatch()
  const { transaction, categories, 
    tabExpOrIncome, sort, sortDatePeriod, themeApp, categoriesSortData } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  // фильтр трат и доходов
  const expensesAndIncomFilter = transaction.filter((c) => c.income === tabExpOrIncome)
  // сортировка по выбранному периоду
  const sortArrayPeriodSelect = periodSort(sort, expensesAndIncomFilter, sortDatePeriod)
  // собираю категории
  const sortArray = getSortCategories(sortArrayPeriodSelect, categories, categoriesSortData) || []
  // общая сумма денег в тратах или доходах
  const sumMoney = countSumItemsFromList(sortArray)

  const openModal = () => {
    setExpAndEncomeModal(true)
  }

  useEffect(() => {
    console.log('FilterContent');
    
    dispatch(setSumMoneySort(sumMoney))
    dispatch(setDataOnPeriodFilter(sortArray))

  }, [transaction, tabExpOrIncome, sort, sortDatePeriod, categories])

  return (
    <View style={[styles.container, { backgroundColor: COLORS.colorBlack }]}>
        <FilterPeriod />
        <CarouselFilter />
        <Diogramma sortArray={sortArray} hideDiogram={hideDiogram}/>

        <View style={[styles.addBtn]}>
          <AddBtn onPress={openModal}/>
        </View>
    </View>
  )
})

export default FilterContent
