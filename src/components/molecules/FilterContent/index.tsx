import React, { FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { countSumItemsFromList } from '../../../hooks/helpers'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setSumMoneySort } from '../../../store/redusers/main/main'
import AddBtn from '../../atoms/AddBtn'
import CountSumMoney from '../../atoms/CountSumMoney'
import Diogramma from '../../atoms/Diogramma'
import FilterPeriod from '../../atoms/FilterPeriod'
import { styles } from './filter.styles'

const FilterContent: FC = React.memo(({setExpAndEncomeModal}) => {

  const filterPeriod = ['Day', 'Week', 'Month', 'Year'];

  const dispatch = useAppDispatch()
  const { expensesAndIncomes, tabExpOrIncome } = useAppSelector(state => state.main)

  // фильтр трат и доходов
  const expensesAndIncomFilter = expensesAndIncomes.filter((c) => c.income === tabExpOrIncome)
  // общая сумма денег в тратах или доходах
  const sumMoney = countSumItemsFromList(expensesAndIncomFilter)

  const openModal = () => {
    setExpAndEncomeModal(true)
  }

  useEffect(() => {
    dispatch(setSumMoneySort(sumMoney))
    

  }, [expensesAndIncomes, tabExpOrIncome])

  return (
    <View style={styles.container}>
        <FilterPeriod />
        <Diogramma />
        <CountSumMoney />

        <View style={styles.addBtn}>
          <AddBtn onPress={openModal}/>
        </View>
    </View>
  )
})

export default FilterContent
