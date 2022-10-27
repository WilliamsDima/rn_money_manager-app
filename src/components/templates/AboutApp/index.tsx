import React from 'react'
import { Text, TouchableOpacity, View, Linking  } from 'react-native'
import { globalStyles } from '../../../services/styles'
import { styles } from './app.styles'
import ScrollContainer from '../../atoms/Container/ScrollContainer'
import { IconSvg } from '../../../services/icons'
import { INST, LINKEDIN, REACT, STAR, TELEGRAM, TWITTER, VK } from '../../../services/iconsName'
import { COLORS } from '../../../services/colors'
import { urlAppStore } from '../../../hooks/helpers'
import { useTranslation } from 'react-i18next'

const AboutAppTemplate = () => {

  const { t } = useTranslation()
  
  
  const toMySite = () => {
    Linking.openURL('https://williams-dy.ru/')
  }

  const toPrivacy = () => {
    Linking.openURL('https://pages.flycricket.io/upravlenie-finansami/privacy.html')
  }

  const toMyVk = () => {
    Linking.openURL('https://vk.com/williamsdy')
  }
  
  const toInst = () => {
    Linking.openURL('https://www.instagram.com/williams.css/')
  }

  const toTelegram = () => {
    Linking.openURL('https://t.me/DyWilliams')
  }
  
  const toLindedin = () => {
    Linking.openURL('https://ru.linkedin.com/in/dmitry-lemetin-87b412238/ru')
  }

  
  const toTwitter = () => {
    Linking.openURL('https://twitter.com/DmitryWilliam')
  }

  const toReactNative = () => {
    Linking.openURL('https://reactnative.dev/')
  }

  const toGoogleStore = () => {
    Linking.openURL(urlAppStore)
  }

  const toFacebook = () => {
    Linking.openURL('https://www.facebook.com/people/Дмитрий-Леметин/100009919381940/')
  }
  return (
    <ScrollContainer overStyle={styles.container}>
      <View style={styles.item}>
        <Text style={globalStyles.p1}>{t('VERSION')}</Text>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={toPrivacy}>
          <Text style={globalStyles.p1}>{t('privacy_policy')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <Text style={globalStyles.p1}>{t('review')}</Text>
        <TouchableOpacity style={styles.review} onPress={toGoogleStore}>
          <IconSvg name={STAR}/>
          <IconSvg name={STAR}/>
          <IconSvg name={STAR}/>
          <IconSvg name={STAR}/>
          <IconSvg name={STAR}/>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <Text style={globalStyles.p1}>{t('developer_contact')}</Text>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={toMySite}>
          <Text style={[globalStyles.p1, {color: COLORS.mainColor}]}>
            {t('developer_site')} <Text style={{textDecorationLine: 'underline'}}>
              williams-dy.ru</Text> 
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.item, {flexDirection: 'row', justifyContent: 'space-around'}]}>
        <TouchableOpacity onPress={toInst}>
          <IconSvg name={INST}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={toMyVk}>
          <IconSvg name={VK}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={toTelegram}>
          <IconSvg name={TELEGRAM}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={toTwitter}>
          <IconSvg name={TWITTER}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={toLindedin}>
          <View style={{marginTop: -10}}>
            <IconSvg name={LINKEDIN}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.item, {marginTop: 50}]}>
        <TouchableOpacity onPress={toReactNative}>
          <IconSvg name={REACT}/>
        </TouchableOpacity>
      </View>
    </ScrollContainer>
  )
}

export default AboutAppTemplate
