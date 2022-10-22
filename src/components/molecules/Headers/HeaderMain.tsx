import React, { FC, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text,TouchableOpacity } from 'react-native'
import { styles } from './header.styles'
import HistoryBtn from '../../atoms/HistoryBtn'
import CustomModal from '../../atoms/Modal'
import AccauntsModal from '../../organisms/AccauntsModal'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { IconSvg } from '../../../services/icons'
import { getItemFromList, numberConverter } from '../../../hooks/helpers'
import { IAccounts } from '../../../store/redusers/main/types'
import { globalStyles } from '../../../services/styles'
import { ARROW_SELECT } from '../../../services/iconsName'
import { setAllCauntAccaunts, sumCategiesCount, setAccauntId } from '../../../store/redusers/main/main'
import { RoutesNames } from '../../../navigation/routes-names'

interface IHeaderMain {
  
}

const HeaderMain: FC<IHeaderMain> = (props) => {

  const navigation = useNavigation()
  const { accounts, categories, transaction,
    tabExpOrIncome, accountsIdSelected, currencyValue } = useAppSelector(state => state.main)

  const dispatch = useAppDispatch()

  const categoriesExpOrIncomFilter = categories.filter((c) => c.income === tabExpOrIncome)

  const [modal, setModal] = useState(false)
  const accauntSelect: IAccounts = getItemFromList(accountsIdSelected, accounts)

  const toHistory = () => {
    navigation.navigate(RoutesNames.History.Home as never)
  }

  const setAccauntsIdHandler = (id: number) => {
    dispatch(setAccauntId(id))
  }

  useEffect(() => {
    console.log('Header')
    dispatch(sumCategiesCount(categoriesExpOrIncomFilter))
    dispatch(setAllCauntAccaunts())

  }, [tabExpOrIncome, transaction])

  return (
    <View style={styles.header}>

      <View style={[styles.wrapp, {alignItems: 'flex-start'}]}>
        <View style={styles.content}>
            <IconSvg 
              name={accauntSelect?.icon} 
              color={'#fff'} width={20}/>
            <Text style={[globalStyles.p1, {marginLeft: 10}]} numberOfLines={1}>
              {accauntSelect?.name}
            </Text>
        </View>
      </View>

      <View style={styles.wrapp}>
        <TouchableOpacity 
          style={styles.container} 
          onPress={() => setModal(!modal)}>
          <Text style={[globalStyles.p2, {marginRight: 10}]}>
            {numberConverter(accauntSelect?.count)} {currencyValue}
          </Text>
          <IconSvg name={ARROW_SELECT} marginTop={-5}/>     
        </TouchableOpacity>
      </View>

      <TouchableOpacity
      onPress={toHistory} 
      style={[styles.wrapp, {alignItems: 'flex-end'}]}>
        <HistoryBtn />   
      </TouchableOpacity>
    
      <CustomModal
      visible={modal}
      animationType={'fade'}
      closeHandler={setModal}>
        <AccauntsModal 
        idSelect={accountsIdSelected} 
        list={accounts}
        setId={setAccauntsIdHandler} 
        close={() => setModal(false)}/>
      </CustomModal>
    </View>
  )
}

export default HeaderMain
