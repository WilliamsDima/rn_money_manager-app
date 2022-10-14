import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames, routesTitle } from '../routes-names'
import { screenOptions } from '../routes-config'
import More from '../../screens/More'
import { COLORS } from '../../services/colors'
import AboutApp from '../../screens/More/aboutApp'

const MoreStack = createStackNavigator()

const MoreRoutes = () => {
  return (
    <MoreStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        title: routesTitle.More,
        headerTintColor: COLORS.colorPriamry,
      }}
    >
      <MoreStack.Screen name={RoutesNames.More.HomeStack} component={More} />

      <MoreStack.Screen 
      options={{
        title: routesTitle.AboutApp,
      }} 
      name={RoutesNames.More.AboutApp} 
      component={AboutApp} />
    </MoreStack.Navigator>
  )
}

export default MoreRoutes
