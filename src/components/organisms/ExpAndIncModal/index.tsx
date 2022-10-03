import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, ToastAndroid, Alert } from 'react-native'
import { getItemFromList, numberConverter } from '../../../hooks/helpers'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { addTransaction } from '../../../store/redusers/main/main'
import { IAccounts, ITransaction } from '../../../store/redusers/main/types'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import CustomModal from '../../atoms/Modal'
import AccauntsModal from '../AccauntsModal'
import CategoriesList from '../CategoriesList'
import { styles } from './modal.styles'
import { IExpAndIncModal } from './modal.types'

const ExpAndIncModal: FC<IExpAndIncModal> = React.memo(({setExpAndEncomeModal}) => {

  const dispatch = useAppDispatch()

  const { accounts, tabExpOrIncome } = useAppSelector(state => state.main)
  const filterAccaunts = accounts.filter((it) => it.id)

  const [modal, setModal] = useState(false)

  const [accauntsId, setAccauntsId] = useState()
  const [categoriId, setCategoriId] = useState()
  const [count, setCount] = useState('')
  const [text, setText] = useState('')
  const selectAccaunt: IAccounts = getItemFromList(accauntsId, accounts)

  const money = tabExpOrIncome ? 
  +selectAccaunt?.count + +count.replace(',', '.') 
  : selectAccaunt?.count - +count.replace(',', '.')

  const disabled = accauntsId && categoriId && count && money >= 0

  const addHandler = () => {
    
    if (money < 0) {
      Alert.alert('Error', `Не хватает средств на счёте - ${selectAccaunt?.name}`);
    }
    
    if(accauntsId && categoriId && count && money >= 0) {
      const data: ITransaction = {
        accounts: accauntsId,
        categori: categoriId,
        date: new Date(),
        id: + new Date(),
        count: +count.replace(',', '.'),
        text: text,
        income: tabExpOrIncome,
        transaction: false
      }
      console.log('new ADD', data);
      dispatch(addTransaction(data))
      ToastAndroid.show('добавлено', 2000);
      setExpAndEncomeModal(false)
    }
  }

  return (
    <View style={[styles.content]}>
      <Text style={styles.title}>{tabExpOrIncome ? 'доход' : 'затраты'}</Text>
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

      <View style={styles.item}>
        <Text style={[globalStyles.p1, styles.itemText]}>Выберите счёт:</Text>

        <TouchableOpacity style={{marginTop: 10}}
        onPress={() => setModal(true)}>
          <Text style={[globalStyles.p1, selectAccaunt ? {color: COLORS.mainColor} 
            : {color: 'red'}]}>
            {selectAccaunt ? selectAccaunt.name  : 'счёт не выбран'}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1, marginTop: 10}}>

        <View style={styles.item}>
          <Text style={[globalStyles.p1, styles.itemText]}>Выберите категорию:</Text>
        </View>

        <View style={{marginTop: 20}}>
          <CategoriesList categoriId={categoriId} setCategoriId={setCategoriId}/>
        </View>

        <View style={[styles.item, {paddingBottom: 100}]}>
          <Text style={[globalStyles.p1, styles.itemText]}>Комментарий:</Text>
          <View style={[styles.inputWrapper, {width: '100%'}]}>
            <Input
              value={text}
              onChange={({nativeEvent}) => setText(nativeEvent.text)}
              overStyle={{width: '100%'}}
              numberOfLines={2}
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

      <CustomModal
        visible={modal}
        animationType={'fade'}
        closeHandler={setModal}>
          <AccauntsModal 
          idSelect={accauntsId} 
          list={filterAccaunts}
          setId={setAccauntsId} 
          close={() => setModal(false)}/>
      </CustomModal>
    </View>
  )
})

export default ExpAndIncModal
