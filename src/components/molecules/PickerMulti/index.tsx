import React, { FC, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { getThemeApp } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { styles } from './modal.styles'
import { IPickerMulti } from './modal.types'
import { useTranslation } from 'react-i18next'
import PickerMultiItem from '../../atoms/PickerMultiItem'
import { useAppSelector } from '../../../hooks/hooks'

const PickerMulti: FC<IPickerMulti> = React.memo(({close, submit, select, data, maxMinSelect = 2}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  const { t } = useTranslation()

  const [value, setValue] = useState(select)

  const submitHandler = () => {
    submit(value)
    close(false)
  }

  const disabledItem = value.length === maxMinSelect
  const disabled = value.length < maxMinSelect

  const addIdHandler = (obj) => {

    const isValue = value.some((it) => it.value === obj?.value)

    let arry = [...value]
    if (isValue) {
      arry = arry.filter((it) => it.value !== obj?.value)
    } else {
      arry = [...arry, obj]
    }
    
    setValue(arry)
  }
  

  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => close(false)}
    style={[styles.container]}>
      <TouchableOpacity 
      activeOpacity={1}
      style={[styles.content, { backgroundColor: COLORS.colorBlack }]}>

        <ScrollView style={{width: '100%'}}>
          {data.map((item, i) => {
            return <PickerMultiItem 
            key={i} 
            item={item}
            select={value}
            data={data}
            disabled={disabledItem}
            setValue={addIdHandler}/>
          })}
        </ScrollView>

        <View style={styles.btnGroup}>
          <TouchableOpacity
          onPress={() => close(false)}>
            <Text style={[globalStyles.p1, {color: COLORS.colorRed}]}>{t('cancel')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
          disabled={disabled}
          onPress={submitHandler}>
            <Text style={[globalStyles.p1, disabled && {opacity: 0.3}, {color: COLORS.mainColor}]}>{t('apply')}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  )
})

export default PickerMulti
