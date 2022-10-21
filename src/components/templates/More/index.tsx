import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, Share, Linking, Image } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './more.styles'
import { useNavigation } from '@react-navigation/native'
import { RoutesNames } from '../../../navigation/routes-names'
import { IconSvg } from '../../../services/icons'
import { COIN, EXCHANGE, GEAR, GOOGLE_PLAY, SHARE, STATISTIC, USER } from '../../../services/iconsName'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setPop } from '../../../store/redusers/main/main'
import { urlAppStore } from '../../../hooks/helpers'

const MoreTemplate = () => {
  
  const navigation = useNavigation()

  const dispatch = useAppDispatch()
  
  const { pop } = useAppSelector(state => state.main)

  const toAboutApp = () => {
    navigation.navigate(RoutesNames.More.AboutApp)
  }

  const toStatistic = () => {
    navigation.navigate(RoutesNames.More.Statistic)
  }

  const toRegularPayments = () => {
    navigation.navigate(RoutesNames.More.RegularPayments)
  }

  const toSettings = () => {
    navigation.navigate(RoutesNames.More.Settings)
  }

  const toAuth = () => {
    navigation.navigate(RoutesNames.Auth.Home)
  }

  const toGooglePlay = () => {
    Linking.openURL(urlAppStore)
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: urlAppStore,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message)
    }
  };

  const [cat, setCat] = useState(true)

  const setCount = () => {
    dispatch(setPop(pop + 1))
  }

  const onPressOut = () => {
    setCat(true)
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={toAuth}>
        <View style={{marginHorizontal: 10}}>
          <IconSvg name={USER} width={20}/>
        </View>
        <Text style={globalStyles.h2}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={toStatistic}>
        <View style={{marginHorizontal: 10}}>
          <IconSvg name={STATISTIC} width={20}/>
        </View>
        <Text style={globalStyles.h2}>Статистика</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={toRegularPayments}>
        <View style={{marginHorizontal: 10}}>
          <IconSvg name={EXCHANGE} width={20}/>
        </View>
        <Text style={globalStyles.h2}>Регулярные платежи</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={onShare}>
        <View style={{marginHorizontal: 10}}>
          <IconSvg name={SHARE} width={20}/>
        </View>
        <Text style={globalStyles.h2}>Поделиться</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={toSettings}>
        <View style={{marginHorizontal: 10}}>
          <IconSvg name={GEAR} width={20}/>
        </View>
        <Text style={globalStyles.h2}>Настройки</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={toGooglePlay}>
        <View style={{marginHorizontal: 10}}>
          <IconSvg name={GOOGLE_PLAY} width={20}/>
        </View>
        <Text style={globalStyles.h2}>Оставить отзыв</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={toAboutApp}>
        <View style={{marginHorizontal: 10}}>
          <IconSvg name={COIN} width={20}/>
        </View>
        <Text style={globalStyles.h2}>О приложении</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      activeOpacity={1}
      touchSoundDisabled={false}
      style={styles.pop}
      onPress={setCount}
      onPressOut={onPressOut} 
      onPressIn={() => setCat(false)}>
        {cat ? <Image 
        style={{transform: [{scale: 0.8}]}}
        source={require('../../../assets/image/cat.png')} /> 
        :<Image 
        style={{transform: [{scale: 0.8}]}}
        source={require('../../../assets/image/pop.png')} />}

        <Text style={[globalStyles.h2, {position: 'absolute', right: 40}]}>
          pop: {pop}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default MoreTemplate
