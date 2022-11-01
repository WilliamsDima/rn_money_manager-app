import React from 'react'
import Container from '../../components/atoms/Container'
import MainTemplate from '../../components/templates/Main'
import YandexAds from 'react-native-yandex-ads'

const Main = () => {
  YandexAds.showInterstitialAd('R-M-1996651-1', 'Main');

  return <Container>
    <MainTemplate />
  </Container>
  
}

export default Main
