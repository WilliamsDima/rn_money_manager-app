import React from 'react'
import { StatusBar } from 'react-native'
import Countainer from '../../components/atoms/Container'
import MoreTemplate from '../../components/templates/More'

const More = () => {
  return <Countainer>
    <StatusBar 
    barStyle = "dark-content" 
    hidden = {false} 
    translucent = {false}/>
    <MoreTemplate />
  </Countainer>
  
}

export default More
