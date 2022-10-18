import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames, routesTitle } from '../routes-names'
import { screenOptions } from '../routes-config'
import More from '../../screens/More'
import { COLORS } from '../../services/colors'
import AboutApp from '../../screens/More/aboutApp'
import AuthRoutes from './auth_routes'
import Statistic from '../../screens/Statistic'
import RegularPayments from '../../screens/RegularPayments'
import Settings from '../../screens/Settings'

const MoreStack = createStackNavigator()

const MoreRoutes = () => {
  return (
    <MoreStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: false,
        title: routesTitle.More,
        headerTintColor: COLORS.colorPriamry,
      }}
    >
      <MoreStack.Screen name={RoutesNames.More.HomeStack} component={More} />

      <MoreStack.Screen 
      options={{
        title: routesTitle.AboutApp,
        headerShown: true
      }} 
      name={RoutesNames.More.AboutApp} 
      component={AboutApp} />

      <MoreStack.Screen 
      options={{
        title: routesTitle.Statistic,
        headerShown: true
      }} 
      name={RoutesNames.More.Statistic} 
      component={Statistic} />

      <MoreStack.Screen 
      options={{
        title: routesTitle.RegularPayments,
        headerShown: true
      }} 
      name={RoutesNames.More.RegularPayments} 
      component={RegularPayments} />

      <MoreStack.Screen 
      options={{
        title: routesTitle.Settings,
        headerShown: true
      }} 
      name={RoutesNames.More.Settings} 
      component={Settings} />

      <MoreStack.Screen 
      options={{
        title: routesTitle.Auth,
        headerShown: true
      }} 
      name={RoutesNames.Auth.Home} 
      component={AuthRoutes} />
    </MoreStack.Navigator>
  )
}

export default MoreRoutes
