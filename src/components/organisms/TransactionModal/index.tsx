import React, { FC, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, ToastAndroid, Alert, Keyboard } from 'react-native'
import { getItemFromList } from '../../../hooks/helpers'
import { useAppDispatch, useAppSelector, useAutoFocus } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { addTransaction } from '../../../store/redusers/main/main'
import { IAccounts, ITransaction } from '../../../store/redusers/main/types'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import CustomModal from '../../atoms/Modal'
import AccauntsModal from '../AccauntsModal'
import { styles } from './modal.styles'
import { IExpAndIncModal } from './modal.types'
import { useTranslation } from 'react-i18next'

const TransactionModal: FC<IExpAndIncModal> = React.memo(({setModal}) => {

  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const { accounts, themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  const [accauntsModalFirst, setAccauntsModalFirst] = useState(false)
  const [accauntsModalSecond, setAccauntsModalSecond] = useState(false)

  const [accauntFirst, setAccauntFirst] = useState(null)
  const [accauntSecond, setAccauntSecond] = useState(null)
  const [count, setCount] = useState('')
  const [text, setText] = useState('')
  const [date, setDate] = useState(new Date())

  const selectAccauntFirst: IAccounts = accauntFirst 
  && getItemFromList(accauntFirst, accounts)

  const selectAccauntSecond: IAccounts = accauntFirst 
  && getItemFromList(accauntSecond, accounts)

  const filterAccauntsForFirst = accounts.filter((it) => it.id 
  && (it.id !== accauntSecond))
  const filterAccauntsForSecond = accounts.filter((it) => it.id 
  && (it.id !== accauntFirst))

  const money = selectAccauntFirst && selectAccauntFirst.count - +count.replace(',', '.') 

  const disabled = accauntFirst && accauntSecond && count

  const addHandler = () => {
    
    if (money < 0) {
      Alert.alert('Error', `${t('Not_funds_in_account')} - ${selectAccauntFirst?.name}`);
    }
    
    if(selectAccauntFirst && selectAccauntSecond && count && money >= 0) {
      const data: ITransaction = {
        accounts: [selectAccauntFirst.id, selectAccauntSecond.id],
        categori: null,
        date,
        id: +date,
        count: +count.replace(',', '.'),
        text: text,
        income: true,
        transaction: true,
        currency: selectAccauntFirst?.currency,
      }
      console.log('new ADD', data);
      dispatch(addTransaction(data))
      ToastAndroid.show(t('added'), 2000);
      setModal(false)
    }
  }
  
  useEffect(() => { 
    console.log('TransactionModal');

  }, [accauntFirst, accauntSecond])


  return (
    <View style={[styles.content, { backgroundColor: COLORS.colorBlack }]}>
      <Text style={[styles.title, { textDecorationColor: COLORS.mainColor }, {color: COLORS.colorText}]}>
        {t('Translation').toLocaleUpperCase()}</Text>
      
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
        </View>

        <View style={styles.item}>
          <Text style={[globalStyles.p1, styles.itemText, {color: COLORS.colorText}]}>{t('Where')}:</Text>

          <TouchableOpacity style={{marginTop: 10}}
          onPress={() => setAccauntsModalFirst(true)}>
            <Text style={[globalStyles.p1, accauntFirst ? {color: COLORS.mainColor} 
              : {color: 'red'}]}>
              {accauntFirst ? selectAccauntFirst?.name  : t('account_not_selected')}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Text style={[globalStyles.p1, styles.itemText, {color: COLORS.colorText}]}>{t('WHERE')}:</Text>

          <TouchableOpacity style={{marginTop: 10}}
          onPress={() => setAccauntsModalSecond(true)}>
            <Text style={[globalStyles.p1, accauntSecond ? {color: COLORS.mainColor} 
              : {color: 'red'}]}>
              {accauntSecond ? selectAccauntSecond?.name  : t('account_not_selected')}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.item, {paddingBottom: 100}]}>
          <Text style={[globalStyles.p1, styles.itemText, {color: COLORS.colorText}]}>{t('Comment')}:</Text>
          <View style={[styles.inputWrapper, {width: '100%'}]}>
            <Input
              value={text}
              onChange={({nativeEvent}) => setText(nativeEvent.text)}
              overStyle={{width: '100%'}}
              numberOfLines={2}
              multiline={true}/>
          </View>
        </View>

      </ScrollView>

      <View style={styles.btn}>
        <Button onPress={addHandler} disabled={!disabled}>
          <Text style={[globalStyles.p2, {color: COLORS.colorBlack}]}>
            {t('CREATE')}
          </Text>
        </Button>
      </View>

      <CustomModal
        visible={accauntsModalFirst}
        animationType={'fade'}
        closeHandler={setAccauntsModalFirst}>
          <AccauntsModal 
          list={filterAccauntsForFirst}
          idSelect={selectAccauntFirst?.id}
          setId={setAccauntFirst} 
          close={() => setAccauntsModalFirst(false)}/>
      </CustomModal>

      <CustomModal
        visible={accauntsModalSecond}
        animationType={'fade'}
        closeHandler={setAccauntsModalSecond}>
          <AccauntsModal 
          list={filterAccauntsForSecond}
          idSelect={selectAccauntSecond?.id}
          setId={setAccauntSecond} 
          close={() => setAccauntsModalSecond(false)}/>
      </CustomModal>
    </View>
  )
})

export default TransactionModal
