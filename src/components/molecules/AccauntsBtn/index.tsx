import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { RoutesNames } from '../../../navigation/routes-names'
import { HISTORY, REFUND } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import AddBtn from '../../atoms/AddBtn'
import IconBtn from '../../atoms/IconBtn'
import { styles } from './button.styles'
import { IButton } from './button.types'
import { useTranslation } from 'react-i18next'
import { getThemeApp } from '../../../services/colors'
import { useAppSelector } from '../../../hooks/hooks'

const AccauntsBtn: FC<IButton> = ({setModal, setModalTransaction}) => {

  const navigation = useNavigation()
  const { t } = useTranslation()

  const { themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  const toHistory = () => {
    navigation.navigate(RoutesNames.History.Home)
  }
  
  return (
    <View style={[styles.container]}>

      <View style={styles.buttons}>
        <View style={styles.btn}>
          <IconBtn name={HISTORY} onPress={toHistory}/>
          <Text style={[globalStyles.p2, styles.btnText, {color: COLORS.colorText}]}>
            {t('History')}
          </Text>
        </View>
        <View style={[styles.btn]}>
          <IconBtn name={REFUND} onPress={() => setModalTransaction(true)}/>
          <Text style={[globalStyles.p2, styles.btnText, {color: COLORS.colorText}]}>
          {t('Translation')}
          </Text>
        </View>
      </View>
      
      <View style={styles.addBtn}>
          <AddBtn 
          overStyle={{transform: [{scale: 1.3}]}}
          onPress={() => setModal(true)}/>
      </View>
    </View>
  )
}

export default AccauntsBtn
