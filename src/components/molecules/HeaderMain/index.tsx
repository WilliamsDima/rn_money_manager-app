import React, { useEffect } from 'react'
import { View } from 'react-native'
import { localAPI } from '../../../api/asyncStorage'
import { useAppDispatch } from '../../../hooks/hooks'
import i18n from '../../../i18n/i18n'
import { LOCAL_NAME } from '../../../store/actions/main/types'
import { addLocalAccaunts, addLocalCategories, addLocalExpAndIncome, setAccauntId, setAllCauntAccaunts, setCurrencyValue, 
  setDeveloperModeAC, 
  setLanguage, setPop, setRate, setSortValue, setThemeApp } from '../../../store/redusers/main/main'
import ButtonsTabMain from '../../atoms/ButtonsTabMain'
import { styles } from './header.styles'

const HeaderMain = () => {

  const dispatch = useAppDispatch()

  // localAPI.remove(LOCAL_NAME.ACCAUNT_SELECT)
  // localAPI.remove(LOCAL_NAME.EPENSES_INCOME)
  // localAPI.remove(LOCAL_NAME.CATEGORIES)
  // localAPI.remove(LOCAL_NAME.ACCAUNTS)
  // localAPI.remove(LOCAL_NAME.POP)
  // localAPI.remove(LOCAL_NAME.PERIOD)
  // localAPI.remove(LOCAL_NAME.CURRENCY_VALUE)
  // localAPI.remove(LOCAL_NAME.RATE)
  // localAPI.remove(LOCAL_NAME.THEME_APP)
  // localAPI.remove(LOCAL_NAME.DEVELOPER)

  const localStoreHandler = async () => {

    const accauntId = await localAPI.get(LOCAL_NAME.ACCAUNT_SELECT)
    if (accauntId || (accauntId === 0)) {
      dispatch(setAccauntId(accauntId))
    }

    const exp = await localAPI.get(LOCAL_NAME.EPENSES_INCOME)
    exp && dispatch(addLocalExpAndIncome(exp))

    const cat = await localAPI.get(LOCAL_NAME.CATEGORIES)
    cat && dispatch(addLocalCategories(cat))

    const acc = await localAPI.get(LOCAL_NAME.ACCAUNTS)
    acc && dispatch(addLocalAccaunts(acc))

    const pop = await localAPI.get(LOCAL_NAME.POP)
    pop && dispatch(setPop(pop))

    const period = await localAPI.get(LOCAL_NAME.PERIOD)
    period && dispatch(setSortValue(period))

    const currency = await localAPI.get(LOCAL_NAME.CURRENCY_VALUE)
    currency && dispatch(setCurrencyValue(currency))

    const currencySelect = await localAPI.get(LOCAL_NAME.RATE)
    currencySelect && dispatch(setRate(currencySelect))

    const themeApp = await localAPI.get(LOCAL_NAME.THEME_APP)
    themeApp && dispatch(setThemeApp(themeApp))

    const developer = await localAPI.get(LOCAL_NAME.DEVELOPER)
    developer && dispatch(setDeveloperModeAC(developer))

    const language = await localAPI.get(LOCAL_NAME.LANGUAGE)

    language && i18n
        .changeLanguage(language)
        .then(() => dispatch(setLanguage(language)))
        .catch(err => console.log(err));


    dispatch(setAllCauntAccaunts())
  }

  useEffect(() => {
    console.log('HeaderMain')

    localStoreHandler()
  }, [])

  return (
    <View style={styles.container}>
        {/* <Rate /> */}
        <ButtonsTabMain main={true}/>
    </View>
  )
}

export default HeaderMain
