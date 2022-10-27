import React, { FC, useState } from 'react'
import { ScrollView, View, Dimensions } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import CategoriItem from '../../molecules/CategoriItem'
import { styles } from './list.styles'
import { ICategories } from './list.types'

const CategoriesList: FC<ICategories> = ({categoriId, setCategoriId, expOrIncom, rowSize}) => {

  const countItemForRow = 9

  const [size, setSize] = useState(0)
  const { categories, tabExpOrIncome } = useAppSelector(state => state.main)

  const isExpOrIncom = expOrIncom !== undefined ? expOrIncom : tabExpOrIncome
  const categoriesFilter = categories.filter((c) => c.income === isExpOrIncom)

  let res = []
  const count = parseInt(categoriesFilter.length / countItemForRow)
  for (let i = 0; i < count; i++) {
    res.push(categoriesFilter.slice(i * countItemForRow, i * countItemForRow + countItemForRow))
  }
  if (count * countItemForRow < categoriesFilter.length) {
    res.push(categoriesFilter.slice(count * countItemForRow))
  }

  const getRowWidth = (event) => {
    const { width } = event.nativeEvent.layout
    setSize(width / 3)
  }

  const rowWidth = Dimensions.get('window').width 
  - globalStyles.spaceHorizontal.paddingHorizontal * (rowSize || 4)
  
  let countHandlerMarginRow = 2
  
  return (
    <ScrollView 
    style={[styles.list, {height: size * 3}]} 
    horizontal={true} 
    pagingEnabled={true}>
      {res.map((it, i) => {
        return <View style={[styles.row, {width: rowWidth}]} key={i} onLayout={getRowWidth}>
          {it.map((item, j) => {
              let margin = {}
              if (countHandlerMarginRow === j + 1) {
                countHandlerMarginRow += 3
                margin = {marginLeft: 10, marginRight: 10}
              }
              if (j === 8) {
                countHandlerMarginRow = 2
              }
              return <CategoriItem
              categoriId={categoriId} 
              setCategoriId={setCategoriId}
              overStyle={margin} 
              key={item.id} 
              item={item} 
              size={size - 10}/>
          })}
        </View>
      })}
    </ScrollView>
  )
}

export default CategoriesList
