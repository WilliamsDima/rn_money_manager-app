import React, { FC, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import FilterBtnSelect from '../../atoms/FilterBtnSelect'
import { styles } from './modal.styles'
import { IHistoryModal } from './modal.types'

const HistoryFilterModal: FC<IHistoryModal> = React.memo(({close, submit, 
  typeValue, sortOrderValue}) => {

  const [type, setType] = useState(typeValue)
  const [sortOrder, setSortOrder] = useState(sortOrderValue)

  const dataType = [
    {
      id: 0,
      title: 'Все',
      value: 'all',
    },
    {
      id: 1,
      title: 'Траты',
      value: false,
    },
    {
      id: 2,
      title: 'Доходы',
      value: true,
    },
  ]

  const countType = [
    {
      id: 0,
      title: 'По порядку',
      value: 'all',
    },
    {
      id: 1,
      title: 'По убыванию',
      value: false,
    },
    {
      id: 2,
      title: 'По возратанию',
      value: true,
    },
  ]

  const submitHandler = () => {
    const data = {
      type,
      sortOrder,
    }
    submit(data)
  }

  console.log('type', type);
  

  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => close(false)}
    style={[styles.container]}>
      <TouchableOpacity 
      activeOpacity={1}
      style={styles.content}>

        <ScrollView style={{width: '100%'}}>
          <Text style={globalStyles.p2}>Тип:</Text>
          {dataType.map((item) => {
            return <FilterBtnSelect 
            key={item.id} 
            data={item} 
            isValue={type}
            setValue={setType}/>
          })}
          <Text style={[globalStyles.p2, {marginTop: 10}]}>Упорядочить:</Text>
          {countType.map((item) => {
            return <FilterBtnSelect 
            key={item.id} 
            data={item} 
            isValue={sortOrder}
            setValue={setSortOrder}/>
          })}
        </ScrollView>

        <View style={styles.btnGroup}>
          <TouchableOpacity
          onPress={() => close(false)}>
            <Text style={[globalStyles.p1, {color: COLORS.colorRed}]}>Отмена</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={submitHandler}>
            <Text style={[globalStyles.p1, {color: COLORS.mainColor}]}>Применить</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  )
})

export default HistoryFilterModal
