import React, { useState } from 'react'
import { View, Text, TouchableOpacity, DevSettings, Alert } from 'react-native'
import { localAPI } from '../../../api/asyncStorage'
import { COLORS } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { CLEAR, DOLLAR, EXCHANGE, LANGUAGE, PASSWORD, PERIOD, THEME } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import { LOCAL_NAME } from '../../../store/actions/main/types'
import ScrollContainer from '../../atoms/Container/ScrollContainer'
import { styles } from './settings.styles'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setCurrencyValue, setSortValue } from '../../../store/redusers/main/main'
import CustomModal from '../../atoms/Modal'
import Picker from '../../molecules/Picker'
import { currencies } from '../../../hooks/helpers'

const SettingsTemplate = () => {

  const dispatch = useAppDispatch()

  const { sort, sortData, currencyValue } = useAppSelector(state => state.main)

  const period = sortData.find((item) => item.value === sort)

  const [periodModal, setPeriodModal] = useState(false)
  const [currenciesModal, setCurrenciesModal] = useState(false)
  

  const changeSortHandler = (value) => {
    dispatch(setSortValue(value))
    localAPI.set(LOCAL_NAME.PERIOD, value)
  }

  const changeCurrencyHandler = (value) => {
    dispatch(setCurrencyValue(value))
    localAPI.set(LOCAL_NAME.CURRENCY_VALUE, value)
  }

  const deleteDate = () => {

    Alert.alert(
      "ВНИМАНИЕ",
      'Все данные приложения будут удалены без возможности восстановления, после подтверждения, приложение будет перезапущено.',
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
            localAPI.remove(LOCAL_NAME.ACCAUNT_SELECT)
            localAPI.remove(LOCAL_NAME.EPENSES_INCOME)
            localAPI.remove(LOCAL_NAME.CATEGORIES)
            localAPI.remove(LOCAL_NAME.ACCAUNTS)
            localAPI.remove(LOCAL_NAME.POP)
            DevSettings.reload()
        } }
      ]
    );
  }

  const inDevProgress = () => {
    Alert.alert(
      'В РАЗРАБОТКЕ...')
  }


  return (
    <ScrollContainer overStyle={styles.container}>

      <TouchableOpacity style={styles.item} onPress={inDevProgress}>
        <View style={{marginRight: 20}}>
          <IconSvg name={PASSWORD} width={25}/>
        </View>
        <Text style={[globalStyles.h2, {marginRight: 20}]}>
          PIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={inDevProgress}>
        <View style={{marginRight: 20}}>
          <IconSvg name={LANGUAGE} width={25}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6}]}>
            Язык
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            Ru
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={inDevProgress}>
        <View style={{marginRight: 20}}>
          <IconSvg name={EXCHANGE} width={25}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6}]}>
            Курс валют
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            $ / E
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => setCurrenciesModal(true)}>
        <View style={{marginRight: 20}}>
          <IconSvg name={DOLLAR} width={25}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>

          <CustomModal visible={currenciesModal} closeHandler={setCurrenciesModal}>
            <Picker 
              overStyle={{maxHeight: '90%'}}
              close={() => setCurrenciesModal(false)}
              changeValue={changeCurrencyHandler} 
              select={currencyValue} 
              list={currencies}/>
          </CustomModal>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6}]}>
            Валюта
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            {currencyValue}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={inDevProgress}>
        <View style={{marginRight: 20}}>
          <IconSvg name={THEME} width={25}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6}]}>
            Тема
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            Темная
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => setPeriodModal(true)}>
        <View style={{marginRight: 20}}>
          <IconSvg name={PERIOD} width={25}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6}]}>
            Период
          </Text>

          <CustomModal visible={periodModal} closeHandler={setPeriodModal}>
            <Picker 
            close={() => setPeriodModal(false)}
            changeValue={changeSortHandler} 
            select={sort} 
            list={sortData}/>
          </CustomModal>

          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            {period?.title}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={deleteDate}>
        <View style={{marginRight: 20}}>
          <IconSvg name={CLEAR} width={25} color={COLORS.colorRed}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {color: COLORS.colorRed}]}>
            Удалить данные
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollContainer>
  )
}

export default SettingsTemplate
