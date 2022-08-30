import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import Input from '../../atoms/Input'
import { styles } from './modal.styles'
import { IExpAndIncModal } from './modal.types'

const ExpAndIncModal: FC<IExpAndIncModal> = React.memo(({  }) => {

  return (
    <View style={[styles.content]}>
      <Text style={styles.title}>затраты</Text>
      <View style={styles.inputWrapper}>
        <Input 
          overStyle={styles.input} 
          maxLength={10}
          placeholder={'0'}
          placeholderTextColor={'#333'}
          autoFocus={true} 
          keyboardType={'number-pad'}/>
        <Text style={globalStyles.h2}>RUB</Text>
      </View>

      <View style={styles.item}>
        <Text style={[globalStyles.p1, styles.itemText]}>Выберите счёт:</Text>

        <TouchableOpacity style={{marginTop: 10}}>
          <Text style={[globalStyles.p1, {color: 'red'}]}>счёт не выбран</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.item}>
        <Text style={[globalStyles.p1, styles.itemText]}>Выберите категорию:</Text>
      </View>

      <View style={styles.item}>
        <Text style={[globalStyles.p1, styles.itemText]}>Комментарий:</Text>
        <Input multiline={true} numberOfLines={2}/>
      </View>
    </View>
  )
})

export default ExpAndIncModal
