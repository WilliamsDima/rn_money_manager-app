import React, { FC } from 'react'
import { styles } from './main.styles'
import { IMain } from './main.types'
import { View } from 'react-native'
import FilterList from '../../atoms/FilterList'
import ListData from '../../molecules/ListData'
import { useAppSelector } from '../../../hooks/hooks'

const MainContent: FC<IMain> = ({}) => {

  const { categories, tabExpOrIncome } = useAppSelector(state => state.main)
  const categoriesFilter = categories.filter((c) => c.income === tabExpOrIncome && c.count)

  return (
    <View style={[styles.view]}>
        <FilterList />
        <ListData data={categoriesFilter} />

    </View>
  )
}

export default MainContent
