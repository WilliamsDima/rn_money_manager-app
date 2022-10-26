import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames, routesTitle } from '../routes-names'
import { screenOptions } from '../routes-config'
import Header from '../../components/organisms/Header'
import Accaunts from '../../screens/Accaunts'
import History from '../../screens/History'
import { COLORS } from '../../services/colors'
import { useTranslation } from 'react-i18next'

const AccauntsStack = createStackNavigator()


const AccauntsRoutes = () => {

  const { t } = useTranslation()

  return (
    <AccauntsStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        title: t('Accaunts'),
        headerTintColor: COLORS.colorPriamry,
      }}>

      <AccauntsStack.Screen 
      name={RoutesNames.Accaunts.HomeStack} 
      component={Accaunts} />

      <AccauntsStack.Screen
      options={{
        title: t('History'),
      }} 
      name={RoutesNames.History.Home} 
      component={History} />

    </AccauntsStack.Navigator>
  )
}

export default AccauntsRoutes
