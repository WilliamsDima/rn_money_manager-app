import React, { FC } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import PickerItem from '../../atoms/PickerItem'
import { styles } from './modal.styles'
import { IPicker } from './modal.types'

const Picker: FC<IPicker> = React.memo(({close, changeValue, select, list, overStyle}) => {
  

  const setAccauntsHandler = (value) => {
    changeValue(value)
    close()
  }

  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => close()}
    style={[styles.container]}>
      <TouchableOpacity 
      activeOpacity={1}
      style={[styles.content, overStyle]}>

        <ScrollView style={{ width: '100%'}}>
          {list.map((item, i) => {
            return <PickerItem 
            key={i} 
            label={item.title} 
            select={select}
            value={item.value}
            changeValue={setAccauntsHandler} />
          })}
        </ScrollView>
      </TouchableOpacity>
    </TouchableOpacity>
  )
})

export default Picker
