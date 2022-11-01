import React, { FC } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import PickerItem from '../../atoms/PickerItem'
import { styles } from './modal.styles'
import { IPicker } from './modal.types'

const Picker: FC<IPicker> = React.memo(({close, changeValue, select, list, overStyle}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)
  

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
      style={[styles.content, { backgroundColor: COLORS.colorBlack }, overStyle]}>

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
