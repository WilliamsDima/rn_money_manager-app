import React, { FC, useState, useEffect } from 'react'
import { styles } from './main.styles'
import { IMain } from './main.types'
import { View } from 'react-native'
import FilterList from '../../atoms/FilterList'
import ListData from '../../molecules/ListData'
import { useAppSelector } from '../../../hooks/hooks'
import { dataFilterMaxValue } from '../../../hooks/helpers'
import DataListEmpty from '../../atoms/DataListEmpty'

const MainContent: FC<IMain> = ({onScroll}) => {

  const [filter, setFilter] = useState(true)
  const { tabExpOrIncome, categoriesSortData } = useAppSelector(state => state.main)

  const categoriesFilter = categoriesSortData.filter((c) => c.income === tabExpOrIncome 
  && c.count)

  const filterMaxValue = dataFilterMaxValue(categoriesFilter, filter)

  return (
    <View style={[styles.view]}>
        <FilterList filter={filter} setFilter={setFilter}/>
        {filterMaxValue?.length 
        ? <ListData data={filterMaxValue} onScroll={onScroll}/> 
        : <DataListEmpty text={tabExpOrIncome ? 'доходов' : 'траты'} />}
        
    </View>
  )
}

export default MainContent
