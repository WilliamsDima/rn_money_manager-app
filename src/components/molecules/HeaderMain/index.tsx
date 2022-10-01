import React, { useEffect } from 'react'
import { View } from 'react-native'
import { localAPI } from '../../../api/asyncStorage'
import { useAppDispatch } from '../../../hooks/hooks'
import { LOCAL_NAME } from '../../../store/actions/main/types'
import { addLocalAccaunts, addLocalCategories, addLocalExpAndIncome, setAccauntId, setAllCauntAccaunts } from '../../../store/redusers/main/main'
import ButtonsTabMain from '../../atoms/ButtonsTabMain'
import Rate from '../../atoms/Rate'
import FilterContent from '../FilterContent'
import { styles } from './header.styles'

const HeaderMain = () => {

  const dispatch = useAppDispatch()

  const localStoreHandler = async () => {

    // БАГИ - СУММА В СЧЕТАХ НЕ ОБНОВЛЯЕТСЯ ПРИ ДОБОВЛЕНИИ ТРАНЗАКЦИИ
    // ДИОГРАММА РУГАЕТСЯ НА ЧТО ТО ПРИ ОТРИСОВКЕ

    // localAPI.remove(LOCAL_NAME.EPENSES_INCOME)
    // localAPI.remove(LOCAL_NAME.CATEGORIES)
    // localAPI.remove(LOCAL_NAME.ACCAUNTS)

    const accauntId = await localAPI.get(LOCAL_NAME.ACCAUNT_SELECT)
    accauntId && dispatch(setAccauntId(accauntId))

    const exp = await localAPI.get(LOCAL_NAME.EPENSES_INCOME)
    exp && dispatch(addLocalExpAndIncome(exp))

    const cat = await localAPI.get(LOCAL_NAME.CATEGORIES)
    cat && dispatch(addLocalCategories(cat))

    const acc = await localAPI.get(LOCAL_NAME.ACCAUNTS)
    acc && dispatch(addLocalAccaunts(acc))

    dispatch(setAllCauntAccaunts())
  }

  useEffect(() => {
    console.log('HeaderMain')

    localStoreHandler()
  }, [])

  return (
    <View style={styles.container}>
        {/* <Rate /> */}
        <ButtonsTabMain />
    </View>
  )
}

export default HeaderMain
