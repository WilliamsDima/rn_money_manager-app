import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, ToastAndroid } from 'react-native'
import { useAppDispatch } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { IAccounts } from '../../../store/redusers/main/types'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import { styles } from './modal.styles'
import { IAccauntCreateModal } from './modal.types'

const CreateAccauntModal: FC<IAccauntCreateModal> = React.memo(({setModal}) => {

  const dispatch = useAppDispatch()

  const [count, setCount] = useState('0')
  const [icon, setIcon] = useState('')
  const [name, setName] = useState('')
  const [bg, setBg] = useState('')

  const disabled = icon && name && bg && count

  const addHandler = () => {
    
    if (disabled) {
      const data: IAccounts = {
        icon,
        bg,
        name,
        id: + new Date(),
        count: +count.replace(',', '.'),
      }
      console.log('new ADD Accaunt', data);
      // dispatch(addTransaction(data))
      ToastAndroid.show('добавлено', 2000);
      // setModal(false)
    }
  }

  return (
    <View style={[styles.content]}>
      <Text style={styles.title}>
        Создание счёта
      </Text>
      
      <View style={styles.inputWrapper}>
        <Input 
            overStyle={styles.input} 
            maxLength={10}
            value={count}
            onChange={({nativeEvent}) => setCount(nativeEvent.text)}
            placeholder={'0'}
            placeholderTextColor={'#333'}
            autoFocus={true} 
            keyboardType={'number-pad'}/>
        <Text style={globalStyles.h2}>RUB</Text>
      </View>

      <ScrollView style={{flex: 1, marginTop: 10}}>

        <View style={styles.item}>
          <Text style={[globalStyles.p1, styles.itemText]}>Иконка:</Text>
        </View>

        <View style={{marginTop: 20}}>
          {/* <CategoriesList categoriId={categoriId} setCategoriId={setCategoriId}/> */}
        </View>

        <View style={styles.item}>
          <Text style={[globalStyles.p1, styles.itemText]}>Цвет:</Text>
        </View>

        <View style={{marginTop: 20}}>
          {/* <CategoriesList categoriId={categoriId} setCategoriId={setCategoriId}/> */}
        </View>

        <View style={[styles.item, {paddingBottom: 0}]}>
          <Text style={[globalStyles.p1, styles.itemText]}>Название:</Text>
          <View style={[styles.inputWrapper, {width: '100%', marginTop: 0}]}>
            <Input
              value={name}
              onChange={({nativeEvent}) => setName(nativeEvent.text)}
              overStyle={{width: '100%'}}
              maxLength={40}
              placeholderTextColor={'#333'}
              multiline={true}/>
          </View>
        </View>

      </ScrollView>

      <View style={styles.btn}>
        <Button onPress={addHandler} disabled={!disabled}>
          <Text style={[globalStyles.p2, {color: COLORS.colorBlack}]}>
            ДОБАВИТЬ
          </Text>
        </Button>
      </View>
    </View>
  )
})

export default CreateAccauntModal
