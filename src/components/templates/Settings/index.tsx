import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, DevSettings, Alert } from 'react-native'
import { localAPI } from '../../../api/asyncStorage'
import { getThemeApp } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { CLEAR, DEVELOPER, DOLLAR, EXCHANGE, LANGUAGE, PASSWORD, PERIOD, THEME } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import { LOCAL_NAME } from '../../../store/actions/main/types'
import ScrollContainer from '../../atoms/Container/ScrollContainer'
import { styles } from './settings.styles'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setCurrencyValue, setDeveloperModeAC, setLanguage, setRate, setSortValue, setThemeApp } from '../../../store/redusers/main/main'
import CustomModal from '../../atoms/Modal'
import Picker from '../../molecules/Picker'
import { currencies, sortData, getThemeAppList, getDeveloperMode } from '../../../hooks/helpers'
import { useTranslation } from 'react-i18next'
import i18n from '../../../i18n/i18n'
import PickerMulti from '../../molecules/PickerMulti'
import RNRestart from 'react-native-restart'

const SettingsTemplate = () => {

  const dispatch = useAppDispatch()
  const { sort, currencyValue, languageData, language, currencySelect, themeApp, developerMode } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  const { t } = useTranslation()

  const languageSelect = languageData.find((item) => item.value === language)
  const themeAppSelect = getThemeAppList().find((item) => item.value === themeApp)

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
  const [rateModal, setRateModal] = useState(false)
  const [themeModal, setThemeModal] = useState(false)
  const [developer, setDeveloper] = useState(false)
  

  const changeSortHandler = (value) => {
    dispatch(setSortValue(value))
    localAPI.set(LOCAL_NAME.PERIOD, value)
  }

  const setDeveloperMode = (value) => {
    dispatch(setDeveloperModeAC(value))
  }

  const changeCurrencyHandler = (value) => {
    dispatch(setCurrencyValue(value))
    localAPI.set(LOCAL_NAME.CURRENCY_VALUE, value)
  }

  const changeThemeHandler = (value) => {
    Alert.alert(
      t('theme_ATTENTION'),
      t('change_theme'),
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
            dispatch(setThemeApp(value))
            setThemeApp(value)

            RNRestart.Restart()
        } }
      ]
    );
  }

  const rateSubmit = (value) => {
    const data = [value[0]?.value, value[1]?.value]
    dispatch(setRate(data))
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
            localAPI.remove(LOCAL_NAME.RATE)
            localAPI.remove(LOCAL_NAME.THEME_APP)
            localAPI.remove(LOCAL_NAME.DEVELOPER)

            RNRestart.Restart()
        } }
      ]
    );
  }

  const inDevProgress = () => {
    Alert.alert(
      `${t('In_developing').toLocaleUpperCase()}...`)
  }

  useEffect(() => {

  }, [themeApp])


  return (
    <ScrollContainer overStyle={[styles.container,  {backgroundColor: COLORS.colorLightBlack}]}>

      <TouchableOpacity style={styles.item} onPress={inDevProgress}>
        <View style={{marginRight: 20}}>
          <IconSvg name={PASSWORD} width={25} color={COLORS.colorText}/>
        </View>
        <Text style={[globalStyles.h2, {marginRight: 20, color: COLORS.colorText}]}>
          PIN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => setLanguageModal(true)}>
        <View style={{marginRight: 20}}>
          <IconSvg name={LANGUAGE} width={25} color={COLORS.colorText}/>
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
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6, color: COLORS.colorText}]}>
            {t('language')}
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            {languageSelect?.title}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => setRateModal(true)}>
        <View style={{marginRight: 20}}>
          <IconSvg name={EXCHANGE} width={25} color={COLORS.colorText}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <CustomModal visible={rateModal} closeHandler={setRateModal}>
            <PickerMulti 
              overStyle={{maxHeight: '90%'}}
              close={() => setRateModal(false)}
              submit={rateSubmit} 
              select={[
                {
                  value: currencySelect[0]
                },
                {
                  value: currencySelect[1]
                },
              ]} 
              data={currencies().filter((it) => it.value !== currencyValue)}/>
          </CustomModal>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6, color: COLORS.colorText}]}>
            {t('Exchange_Rates')}
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            {currencySelect[0]} / {currencySelect[1]}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => setCurrenciesModal(true)}>
        <View style={{marginRight: 20}}>
          <IconSvg name={DOLLAR} width={25} color={COLORS.colorText}/>
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
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6, color: COLORS.colorText}]}>
            {t('currency')}
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            {currencyValue}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => setThemeModal(true)}>
        <View style={{marginRight: 20}}>
          <IconSvg name={THEME} width={25} color={COLORS.colorText}/>
        </View>

        <CustomModal visible={themeModal} closeHandler={setThemeModal}>
            <Picker 
              overStyle={{maxHeight: '90%'}}
              close={() => setThemeModal(false)}
              changeValue={changeThemeHandler} 
              select={themeApp} 
              list={getThemeAppList()}/>
        </CustomModal>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6, color: COLORS.colorText}]}>
            {t('theme')}
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            {themeAppSelect?.title}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => setPeriodModal(true)}>
        <View style={{marginRight: 20}}>
          <IconSvg name={PERIOD} width={25} color={COLORS.colorText}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6, color: COLORS.colorText}]}>
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

      <TouchableOpacity style={styles.item} onPress={() => setDeveloper(true)}>
        <View style={{marginRight: 20}}>
          <IconSvg name={DEVELOPER} width={25} color={COLORS.colorText}/>
        </View>
        <CustomModal visible={developer} closeHandler={setDeveloper}>
          <Picker 
            overStyle={{maxHeight: '90%'}}
            close={() => setDeveloper(false)}
            changeValue={setDeveloperMode} 
            select={developerMode} 
            list={getDeveloperMode()}/>
        </CustomModal>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6, color: COLORS.colorText}]}>
            {t('developer_mode')}
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            {developerMode ? t('developer_mode_on') : t('developer_mode_off')}
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollContainer>
  )
}

export default SettingsTemplate
