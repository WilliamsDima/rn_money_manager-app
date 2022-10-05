import React, { FC, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import CategoryPickerSelect from '../../atoms/CategoryPickerSelect'
import { styles } from './modal.styles'
import { IPickerCategory } from './modal.types'

const PickerCategories: FC<IPickerCategory> = React.memo(({close, setId, value}) => {

  const { categories } = useAppSelector(state => state.main)

  const [categori, setCategori] = useState(value)

  const submitHandler = () => {
    setId(categori)
  }
  

  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => close(false)}
    style={[styles.container]}>
      <TouchableOpacity 
      activeOpacity={1}
      style={styles.content}>

        <Text style={globalStyles.p2}>Категории:</Text>

        <ScrollView style={{width: '100%'}}>
          {categories.map((item) => {
            return <CategoryPickerSelect 
            key={item.id} 
            data={item} 
            idSelect={categori}
            setIdSelect={setCategori}/>
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

export default PickerCategories
