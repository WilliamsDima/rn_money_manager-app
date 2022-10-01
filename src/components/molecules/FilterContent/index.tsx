import React, { FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { countSumItemsFromList, getSortCategories, periodSort } from '../../../hooks/helpers'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setDataOnPeriodFilter, setSumMoneySort } from '../../../store/redusers/main/main'
import AddBtn from '../../atoms/AddBtn'
import CountSumMoney from '../../atoms/CountSumMoney'
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
  const { expensesAndIncomes, categories, 
    tabExpOrIncome, sort, sortDatePeriod } = useAppSelector(state => state.main)
    
  // фильтр трат и доходов
  const expensesAndIncomFilter = expensesAndIncomes.filter((c) => c.income === tabExpOrIncome)
  // сортировка по выбранному периоду
  const sortArrayPeriodSelect = periodSort(sort, expensesAndIncomFilter, sortDatePeriod)
  // собираю категории
  const sortArray = getSortCategories(sortArrayPeriodSelect, categories) || []
  // общая сумма денег в тратах или доходах
  const sumMoney = countSumItemsFromList(sortArray)

  const openModal = () => {
    setExpAndEncomeModal(true)
  }

  useEffect(() => {
    console.log('FilterContent');
    
    dispatch(setSumMoneySort(sumMoney))
    dispatch(setDataOnPeriodFilter(sortArray))

  }, [expensesAndIncomes, tabExpOrIncome, sort, sortDatePeriod, categories])

  return (
    <View style={styles.container}>
        <FilterPeriod />
        <CarouselFilter />
        {/* <Diogramma sortArray={sortArray} hideDiogram={hideDiogram}/> */}
        <CountSumMoney />

        <View style={styles.addBtn}>
          <AddBtn onPress={openModal}/>
        </View>
    </View>
  )
})

export default FilterContent
