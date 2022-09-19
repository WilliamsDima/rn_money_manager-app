import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import { setTabExpOrIncome } from '../../../store/redusers/main/main'
import { styles } from './button.styles'
import { IButtonTabMain } from './button.types'

const ButtonsTabMain: FC<IButtonTabMain> = ({}) => {

  const dispatch = useAppDispatch()

  const { tabExpOrIncome } = useAppSelector(state => state.main)
  
  const tabHandler = (value) => {
    dispatch(setTabExpOrIncome(value))
  }
  
  return (
    <View style={styles.tabs}>
      <TouchableOpacity style={styles.item} onPress={() => tabHandler(false)}>
        <Text style={[globalStyles.p2, styles.text]}>траты</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => tabHandler(true)}>
        <Text style={[globalStyles.p2, styles.text]}>доходы</Text>
      </TouchableOpacity>
      <View style={[styles.line, tabExpOrIncome ? {right: 0} : {left: 0} ]}/>
    </View>
  )
}

export default ButtonsTabMain
