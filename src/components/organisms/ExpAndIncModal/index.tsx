import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, ToastAndroid, Alert } from 'react-native'
import { getItemFromList } from '../../../hooks/helpers'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
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
import { useTranslation } from 'react-i18next'
import DateBtn from '../../atoms/DateBtn'

const ExpAndIncModal: FC<IExpAndIncModal> = React.memo(({setExpAndEncomeModal, data}) => {

  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  
  const { accounts, tabExpOrIncome, categories, currencyValue, themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  const filterAccaunts = accounts.filter((it) => it.id)

  const [modal, setModal] = useState(false)
  

  const [accauntsId, setAccauntsId] = useState(data?.accounts)
  const [categoriId, setCategoriId] = useState(data?.categori)
  const [date, setDate] = useState(data?.date ? new Date(data?.date) : new Date())
  const [count, setCount] = useState(data?.count?.toString() || '')
  const [text, setText] = useState(data?.text || '')

  const yesterday = new Date(+new Date() - 86400000)
  const dayBeforeYesterday = new Date(+new Date() - 86400000 * 2)
  const prevDate = +dayBeforeYesterday - +new Date(data?.date) > 3600 * 1000 * 24
  

   // выбранный счёт существует
  const selectAccaunt: IAccounts = getItemFromList(accauntsId, accounts)

  // выбранная категория существует
  const isCategoryExist = categoriId && getItemFromList(categoriId, categories)


  const money = data ? data.income : tabExpOrIncome ? 
  selectAccaunt ? +selectAccaunt?.count + +count.replace(',', '.') : +count.replace(',', '.')
  : selectAccaunt ? selectAccaunt?.count - +count.replace(',', '.') : +count.replace(',', '.')

  const disabled = selectAccaunt && isCategoryExist && count

  const addHandler = () => {
    
    if (money < 0) {
      Alert.alert('Error', `${t('Not_funds_in_account')} - ${selectAccaunt?.name}`);
    }
    
    if(accauntsId && categoriId && count && money >= 0) {
      const dataTransaction: ITransaction = {
        accounts: accauntsId,
        categori: categoriId,
        date,
        id: data ? data?.id : +new Date(),
        count: +count.replace(',', '.'),
        text: text,
        income: data ? data?.income : tabExpOrIncome,
        currency: selectAccaunt?.currency || currencyValue,
        transaction: data ? data?.transaction : false
      }

      dispatch(addTransaction(dataTransaction))
      ToastAndroid.show(data ? t('changed') : t('added'), 2000);
      setExpAndEncomeModal(false)
    }
  }

  return (
    <View style={[styles.content, { backgroundColor: COLORS.colorBlack }]}>
      <Text style={[styles.title, { textDecorationColor: COLORS.mainColor },
       {color: COLORS.colorText}]}>
          {tabExpOrIncome 
        || data?.income ? t('income') : t('expense')}
      </Text>
      <View style={styles.inputWrapper}>
        <Input 
            overStyle={[styles.input, {color: COLORS.colorText}]} 
            maxLength={10}
            value={count}
            onChange={({nativeEvent}) => setCount(nativeEvent.text)}
            placeholder={'0'}
            placeholderTextColor={COLORS.colorText}
            autoFocus={true} 
            keyboardType={'number-pad'}/>
        <Text style={[globalStyles.h2, {color: COLORS.colorText}]}>{selectAccaunt?.currency || currencyValue}</Text>
      </View>

      <View style={styles.item}>
        <Text style={[globalStyles.p1, {color: COLORS.colorText}, selectAccaunt ? {color: COLORS.mainColor} 
          : styles.itemText]}>{t('Choose_account')}:</Text>

        <TouchableOpacity style={{marginTop: 10}}
        onPress={() => setModal(true)}>
          <Text style={[globalStyles.p1, selectAccaunt ? {color: COLORS.mainColor} 
            : {color: 'red'}]}>
            {selectAccaunt ? selectAccaunt?.name  : data ? t('account_deleted') : t('account_not_selected')}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1, marginTop: 10}}>

        <View style={styles.item}>
          <Text style={[globalStyles.p1, {color: COLORS.colorText}, isCategoryExist ? {color: COLORS.mainColor} 
            : styles.itemText]}>{t('Select_category')}:</Text>
        </View>

        <View style={{marginTop: 20}}>
          <CategoriesList 
          expOrIncom={data?.income}
          categoriId={categoriId} 
          setCategoriId={setCategoriId}/>
        </View>

        <View style={styles.item}>
          <Text style={[globalStyles.p1, styles.itemText, {color: COLORS.colorText}]}>
            {t('Date_picker')}:
          </Text>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            {prevDate && <DateBtn 
              onPress={() => setDate(new Date(data?.date))}
              prevDate={new Date(data?.date)}
              date={date}
            />}

            <DateBtn 
              onPress={() => setDate(dayBeforeYesterday)}
              prevDate={dayBeforeYesterday}
              date={date}
            />
            <DateBtn 
              onPress={() => setDate(yesterday)}
              prevDate={yesterday}
              date={date}
            />
            <DateBtn 
              onPress={() => setDate(new Date())}
              prevDate={new Date()}
              date={date}
            />
          </View>
        </View>

        <View style={[styles.item, {paddingBottom: 100}]}>
          <Text style={[globalStyles.p1, styles.itemText, {color: COLORS.colorText}]}>{t('Comment')}:</Text>
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
            {data ? t('CHANGE').toLocaleUpperCase() : t('add').toLocaleUpperCase()}
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
