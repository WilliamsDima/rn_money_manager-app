import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, ToastAndroid, Alert } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { IAccounts } from '../../../store/redusers/main/types'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import IconsList from '../../molecules/IconsList'
import { styles } from './modal.styles'
import { IAccauntCreateModal } from './modal.types'
import CustomModal from '../../atoms/Modal'
import ColorModal from '../../molecules/ColorModal'
import { addAccaunt, deleteAccaunt, editeAccaunt, setAllCauntAccaunts } from '../../../store/redusers/main/main'
import { currencies, getItemFromList } from '../../../hooks/helpers'
import { useTranslation } from 'react-i18next'
import Picker from '../../molecules/Picker'

const CreateAccauntModal: FC<IAccauntCreateModal> = React.memo(({setModal, editeMode}) => {

  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const { accounts, currencyValue } = useAppSelector(state => state.main)

  const [colorModal, setColorModal] = useState(false)
  const [currenciesModal, setCurrenciesModal] = useState(false)

  const [count, setCount] = useState(editeMode?.count?.toString() || '0')
  const [icon, setIcon] = useState(editeMode?.icon || '')
  const [name, setName] = useState(editeMode?.name || '')
  const [bg, setBg] = useState(editeMode?.bg || '')
  const [currencyAcc, setCurrencyAcc] = useState(editeMode?.currency || currencyValue)

  const setCurrencyAccHandler = (value) => {
    setCurrencyAcc(value)
  }

  const accauntOther: IAccounts = getItemFromList(1, accounts)

  const disabled = icon && name && bg && count

  const addHandler = () => {
    
    if (disabled) {
      const data: IAccounts = {
        icon,
        bg,
        name,
        id: + new Date(),
        count: +count.replace(',', '.'),
        delete: true,
        currency: currencyAcc,
      }
      console.log('new ADD Accaunt', data);
      dispatch(addAccaunt(data))
      dispatch(setAllCauntAccaunts())
      ToastAndroid.show(t('added'), 2000);
      setModal(false)
    }
  }

  const saveHandler = () => {
    
    if (disabled && editeMode?.id) {
      const data: IAccounts = {
        icon,
        bg,
        name,
        id: editeMode?.id,
        count: +count.replace(',', '.'),
        delete: true,
        currency: currencyAcc,
      }
      console.log('save Accaunt', data);
      dispatch(editeAccaunt(data))
      dispatch(setAllCauntAccaunts())
      ToastAndroid.show(t('changed'), 2000);
      setModal(false)
    }
  }

  const deleteHandler = () => {
    Alert.alert(
      t('Removal'),
      t('delete_account', {
        acc: editeMode?.name,
        to_acc: accauntOther?.name,
      }),
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          const data = {
            id: editeMode?.id,
            count: editeMode?.count
          }
            dispatch(deleteAccaunt(data))
            ToastAndroid.show(t('deleted'), 2000);
            setModal(false)
        } }
      ]
    );
  }

  const setColorHandler = (color) => {
    setBg(color)
  }

  return (
    <View style={[styles.content]}>

      <CustomModal visible={colorModal} closeHandler={setColorModal}>
        <ColorModal close={setColorModal} submin={setColorHandler} />
      </CustomModal>

      <CustomModal visible={currenciesModal} closeHandler={setCurrenciesModal}>
        <Picker 
          overStyle={{maxHeight: '90%'}}
          close={() => setCurrenciesModal(false)}
          changeValue={setCurrencyAccHandler} 
          select={currencyAcc} 
          list={currencies()}/>
      </CustomModal>

      <Text style={[styles.title, {color: COLORS.colorText}]}>
        {editeMode ? t('Editing') : t('Create_account')}
      </Text>

      <ScrollView style={{flex: 1, marginTop: 10}}>

      {(!editeMode || editeMode?.id ? true : false) && (<View style={styles.inputWrapper}>
          <Input 
              overStyle={styles.input} 
              maxLength={10}
              value={count}
              onChange={({nativeEvent}) => setCount(nativeEvent.text)}
              placeholder={'0'}
              autoFocus={true} 
              keyboardType={'number-pad'}/>
            <Text style={[globalStyles.h2, {color: COLORS.colorText}]}>{currencyAcc}</Text>
        </View>)}


        <View style={styles.item}>
          <Text style={[globalStyles.p1, {color: COLORS.colorText},
            icon ? {color: COLORS.mainColor} : styles.itemText ]}>
            {t('icon')}:
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <IconsList iconName={icon} setId={setIcon} bg={bg}/>
        </View>

        <View style={[styles.item, {marginTop: -20}]}>
          <Text style={[globalStyles.p1, 
            currencyAcc ? {color: COLORS.mainColor} : styles.itemText]}>
            {t('currency')}:
          </Text>
        </View>

        <TouchableOpacity 
        onPress={() => setCurrenciesModal(true)}
        style={{marginTop: 20}}>
            <Text style={[globalStyles.p1, currencyAcc ? {color: COLORS.mainColor} : styles.itemText]}>
              {currencyAcc}
            </Text>
        </TouchableOpacity>


        <View style={[styles.item, {marginTop: 20}]}>
          <Text style={[globalStyles.p1, {color: COLORS.colorText},
            bg ? {color: COLORS.mainColor} : styles.itemText]}>
            {t('color')}:
          </Text>
        </View>

        <TouchableOpacity 
        onPress={() => setColorModal(true)}
        style={{marginTop: 20}}>
            <View style={[styles.circle, bg && {backgroundColor: bg}]}/>
        </TouchableOpacity>

        <View style={[styles.item, {paddingBottom: 70}]}>
          <Text style={[globalStyles.p1, {color: COLORS.colorText}, name ? {color: COLORS.mainColor} 
            : styles.itemText]}>{t('name')}:</Text>
          <View style={[styles.inputWrapper, {width: '100%', marginTop: 0}]}>
            <Input
              value={name}
              onChange={({nativeEvent}) => setName(nativeEvent.text)}
              overStyle={{width: '100%'}}
              maxLength={40}
              multiline={true}/>
          </View>
        </View>

      </ScrollView>

      <View style={styles.btn}>
        {(editeMode && editeMode?.delete) && <Button 
        onPress={deleteHandler} 
        overStyle={{backgroundColor: 'transparent'}}>
          <Text style={[globalStyles.p2, {color: COLORS.colorRed, textTransform: 'uppercase'}]}>
            {t('delete')}
          </Text>
        </Button>}

        <Button onPress={editeMode ? saveHandler : addHandler} disabled={!disabled}>
          <Text style={[globalStyles.p2, {color: COLORS.colorBlack, textTransform: 'uppercase'}]}>
            {editeMode ? t('save') : t('add')}
          </Text>
        </Button>
      </View>
    </View>
  )
})

export default CreateAccauntModal
