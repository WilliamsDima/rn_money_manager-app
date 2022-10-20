import React from 'react'
import { View, Text, TouchableOpacity, DevSettings, Alert } from 'react-native'
import { localAPI } from '../../../api/asyncStorage'
import { COLORS } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { CLEAR, DOLLAR, LANGUAGE, PASSWORD, PERIOD, THEME } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import { LOCAL_NAME } from '../../../store/actions/main/types'
import ScrollContainer from '../../atoms/Container/ScrollContainer'
import { styles } from './settings.styles'

const SettingsTemplate = () => {

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


  return (
    <ScrollContainer overStyle={styles.container}>
      <TouchableOpacity style={styles.item}>
        <View style={{marginRight: 20}}>
          <IconSvg name={PASSWORD} width={25}/>
        </View>
        <Text style={[globalStyles.h2, {marginRight: 20}]}>
          PIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
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
      <TouchableOpacity style={styles.item}>
        <View style={{marginRight: 20}}>
          <IconSvg name={DOLLAR} width={25}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6}]}>
            Валюта
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            ₽
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
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
      <TouchableOpacity style={styles.item}>
        <View style={{marginRight: 20}}>
          <IconSvg name={PERIOD} width={25}/>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={[globalStyles.h2, {marginRight: 20, opacity: 0.6}]}>
            Период
          </Text>
          <Text style={[globalStyles.h2, {color: COLORS.mainColor}]}>
            Месяц
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
