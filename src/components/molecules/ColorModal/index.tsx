import React, { FC, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ColorPicker, fromHsv } from 'react-native-color-picker'
import { useAppSelector } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import AccauntsBtnSelect from '../../atoms/AccauntsBtnSelect'
import { styles } from './modal.styles'
import { IColorModal } from './modal.types'
import { useTranslation } from 'react-i18next'

const ColorModal: FC<IColorModal> = React.memo(({close, submin}) => {

  const [color, setColor] = useState('')

  const { t } = useTranslation()

  const changeColor = (c) => {
    setColor(fromHsv(c))
  }

  const subminHandler = () => {
    submin(color)
    close(false)
  }

  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => close(false)}
    style={[styles.container]}>
      <TouchableOpacity 
      activeOpacity={1}
      style={styles.content}>
        <ColorPicker
          onColorChange={changeColor}
          onColorSelected={subminHandler}
          style={{width: '80%', height: '80%'}}/>

        <View style={styles.btnGroup}>
            <TouchableOpacity
            onPress={() => close(false)}>
              <Text style={[globalStyles.p1, {color: COLORS.colorRed}]}>{t('cancel')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={subminHandler}>
              <Text style={[globalStyles.p1, {color: COLORS.mainColor}]}>{t('apply')}</Text>
            </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  )
})

export default ColorModal
