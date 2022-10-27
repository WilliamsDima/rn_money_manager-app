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
import { setCurrencyValue, setLanguage, setSortValue } from '../../../store/redusers/main/main'
import CustomModal from '../../atoms/Modal'
import Picker from '../../molecules/Picker'
import { currencies, sortData, themeApp } from '../../../hooks/helpers'
import { useTranslation } from 'react-i18next'
import i18n from '../../../i18n/i18n'

const SettingsTemplate = () => {

  const dispatch = useAppDispatch()
  const { sort, currencyValue, languageData, language } = useAppSelector(state => state.main)

  const { t } = useTranslation()

  const languageSelect = languageData.find((item) => item.value === language)

  const [languageModal, setLanguageModal] = useState(false);

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => dispatch(setLanguage(value)))
      .catch(err => console.log(err));
  };

  const period = sortData().find((item) => item.value === sort)

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
      t('ATTENTION'),
      t('delete_data'),
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
            localAPI.remove(LOCAL_NAME.PERIOD)
            localAPI.remove(LOCAL_NAME.CURRENCY_VALUE)
            localAPI.remove(LOCAL_NAME.LANGUAGE)
          
            DevSettings.reload()
        } }
      ]
    );
  }

  const inDevProgress = () => {
    Alert.alert(
      `${t('In_developing').toLocaleUpperCase()}...`)
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

      <TouchableOpacity style={styles.item} onPress={() => setLanguageModal(true)}>
        <View style={{marginRight: 20}}>
          <IconSvg name={LANGUAGE} width={25}/>
        </View>
        <CustomModal visible={languageModal} closeHandler={setLanguageModal}>
          <Picker 
            overStyle={{maxHeight: '90%'}}
            close={() => setLanguageModal(false)}
            changeValue={changeLanguage} 
            select={languageSelect?.value} 
            list={languageData}/>
        </CustomModal>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6}]}>
            {t('language')}
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            {languageSelect?.title}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={inDevProgress}>
        <View style={{marginRight: 20}}>
          <IconSvg name={EXCHANGE} width={25}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6}]}>
            {t('Exchange_Rates')}
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
              list={currencies()}/>
          </CustomModal>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6}]}>
            {t('currency')}
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
            {t('theme')}
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            {themeApp()[0].title}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => setPeriodModal(true)}>
        <View style={{marginRight: 20}}>
          <IconSvg name={PERIOD} width={25}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6}]}>
            {t('period')}
          </Text>

          <CustomModal visible={periodModal} closeHandler={setPeriodModal}>
            <Picker 
            close={() => setPeriodModal(false)}
            changeValue={changeSortHandler} 
            select={sort} 
            list={sortData()}/>
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
            {t('delete_app_data')}
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollContainer>
  )
}

export default SettingsTemplate
