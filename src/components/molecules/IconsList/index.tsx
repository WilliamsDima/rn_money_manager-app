import React, { FC, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { ICONS } from '../../../services/iconsName'
import IconItem from '../../atoms/IconItem'
import { styles } from './list.styles'
import { IIconsList } from './list.types'

const IconsList: FC<IIconsList> = ({iconName, setId, bg}) => {

  const countItemForRow = 9

  const [size, setSize] = useState(0)

  const iconsData = ICONS.map((item, i) => {
    return {
      name: item,
      id: i+1
    }
  })

  let res = []
  const count = parseInt(iconsData.length / countItemForRow)
  for (let i = 0; i < count; i++) {
    res.push(iconsData.slice(i * countItemForRow, i * countItemForRow + countItemForRow))
  }
  if (count * countItemForRow < iconsData.length) {
    res.push(iconsData.slice(count * countItemForRow))
  }

  const getRowWidth = (event) => {
    const { width } = event.nativeEvent.layout
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
              return <IconItem
              idSelect={iconName}
              setId={setId}
              bg={bg}
              iconName={item.name}
              overStyle={margin} 
              key={item.id}  
              size={size - 20}/>
          })}
        </View>
      })}
    </ScrollView>
  )
}

export default IconsList
