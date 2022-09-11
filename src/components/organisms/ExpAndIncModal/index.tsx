import React, { FC } from 'react'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import CategoriesList from '../CategoriesList'
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
      <ScrollView style={{flex: 1, marginTop: 10}}>

        <View style={styles.item}>
          <Text style={[globalStyles.p1, styles.itemText]}>Выберите категорию:</Text>
        </View>

        <View style={{marginTop: 20}}>
          <CategoriesList />
        </View>

        <View style={[styles.item, {paddingBottom: 100}]}>
          <Text style={[globalStyles.p1, styles.itemText]}>Комментарий:</Text>
          <View style={[styles.inputWrapper, {width: '100%'}]}>
            <Input
              overStyle={{width: '100%'}}
              numberOfLines={2}
              placeholderTextColor={'#333'}
              multiline={true}/>
          </View>
        </View>

      </ScrollView>

      <View style={styles.btn}>
        <Button>
          <Text style={[globalStyles.p2, {color: COLORS.colorBlack}]}>ДОБАВИТЬ</Text>
        </Button>
      </View>
    </View>
  )
})

export default ExpAndIncModal
