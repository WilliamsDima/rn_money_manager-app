import React, { FC, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import CategoriItem from '../../molecules/CategoriItem'
import { styles } from './list.styles'
import { ICategories } from './list.types'

const CategoriesList: FC<ICategories> = ({}) => {

  const countItemForRow = 9

  const [size, setSize] = useState(0)
  const { categories } = useAppSelector(state => state.main)

  let res = []
  const count = parseInt(categories.length / countItemForRow)
  for (let i = 0; i < count; i++) {
    res.push(categories.slice(i * countItemForRow, i * countItemForRow + countItemForRow))
  }
  if (count * countItemForRow < categories.length) {
    res.push(categories.slice(count * countItemForRow))
  }

  const getRowWidth = (event) => {
    const {x, y, width, height} = event.nativeEvent.layout
    setSize(width / 3)
  }
  
  let countHandlerMarginRow = 2
  
  return (
    <ScrollView 
    style={[styles.list, {height: size * 3}]} 
    horizontal={true} 
    pagingEnabled={true}>
      {res.map((it, i) => {
        return <View style={[styles.row]} key={i} onLayout={getRowWidth}>
          {it.map((item, j) => {
              let margin = {}
              if (countHandlerMarginRow === j + 1) {
                countHandlerMarginRow += 3
                margin = {marginLeft: 10, marginRight: 10}
              }
              if (j === 8) {
                countHandlerMarginRow = 2
              }
              return <CategoriItem overStyle={margin} key={item.id} item={item} size={size - 20}/>
          })}
        </View>
      })}
    </ScrollView>
  )
}

export default CategoriesList
