import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, ToastAndroid, Alert } from 'react-native'
import { getItemFromList } from '../../../hooks/helpers'
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

const TransactionModal: FC<IExpAndIncModal> = React.memo(({setModal}) => {

  const dispatch = useAppDispatch()

  const { accounts } = useAppSelector(state => state.main)

  const [accauntsModalFirst, setAccauntsModalFirst] = useState(false)
  const [accauntsModalSecond, setAccauntsModalSecond] = useState(false)

  const [accauntFirst, setAccauntFirst] = useState(null)
  const [accauntSecond, setAccauntSecond] = useState(null)
  const [count, setCount] = useState('')
  const [text, setText] = useState('')

  const selectAccauntFirst: IAccounts = accauntFirst 
  && getItemFromList(accauntFirst, accounts)

  const selectAccauntSecond: IAccounts = accauntFirst 
  && getItemFromList(accauntSecond, accounts)

  const filterAccauntsForFirst = accounts.filter((it) => it.id 
  && (it.id !== accauntFirst))
  const filterAccauntsForSecond = accounts.filter((it) => it.id 
  && (it.id !== accauntSecond))

  const money = selectAccauntFirst && selectAccauntFirst.count - +count.replace(',', '.') 

  const disabled = accauntFirst && accauntSecond && count

  const addHandler = () => {
    
    if (money < 0) {
      Alert.alert('Error', `Не хватает средств на счёте - ${selectAccauntFirst?.name}`);
    }
    
    if(selectAccauntFirst && selectAccauntSecond && count && money >= 0) {
      const data: ITransaction = {
        accounts: [selectAccauntFirst.id, selectAccauntSecond.id],
        categori: null,
        date: new Date(),
        id: + new Date(),
        count: +count.replace(',', '.'),
        text: text,
        income: true,
        transaction: true
      }
      console.log('new ADD', data);
      dispatch(addTransaction(data))
      ToastAndroid.show('добавлено', 2000);
      setModal(false)
    }
  }

  return (
    <View style={[styles.content]}>
      <Text style={styles.title}>ПЕРЕВОД</Text>
      <ScrollView style={{flex: 1, marginTop: 10}}>

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
          <Text style={[globalStyles.p1, styles.itemText]}>Откуда:</Text>

          <TouchableOpacity style={{marginTop: 10}}
          onPress={() => setAccauntsModalFirst(true)}>
            <Text style={[globalStyles.p1, accauntFirst ? {color: COLORS.mainColor} 
              : {color: 'red'}]}>
              {accauntFirst ? selectAccauntFirst?.name  : 'счёт не выбран'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Text style={[globalStyles.p1, styles.itemText]}>Куда:</Text>

          <TouchableOpacity style={{marginTop: 10}}
          onPress={() => setAccauntsModalSecond(true)}>
            <Text style={[globalStyles.p1, accauntSecond ? {color: COLORS.mainColor} 
              : {color: 'red'}]}>
              {accauntSecond ? selectAccauntSecond?.name  : 'счёт не выбран'}
            </Text>
          </TouchableOpacity>
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
            СОЗДАТЬ
          </Text>
        </Button>
      </View>

      <CustomModal
        visible={accauntsModalFirst}
        animationType={'fade'}
        closeHandler={setAccauntsModalFirst}>
          <AccauntsModal 
          list={filterAccauntsForFirst}
          setId={setAccauntFirst} 
          close={() => setAccauntsModalFirst(false)}/>
      </CustomModal>

      <CustomModal
        visible={accauntsModalSecond}
        animationType={'fade'}
        closeHandler={setAccauntsModalSecond}>
          <AccauntsModal 
          list={filterAccauntsForSecond}
          setId={setAccauntSecond} 
          close={() => setAccauntsModalSecond(false)}/>
      </CustomModal>
    </View>
  )
})

export default TransactionModal
