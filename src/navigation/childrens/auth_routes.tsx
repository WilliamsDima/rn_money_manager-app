import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames, routesTitle } from '../routes-names'
import { screenOptions } from '../routes-config'
import More from '../../screens/More'
import { COLORS } from '../../services/colors'
import AboutApp from '../../screens/More/aboutApp'
import Auth from '../../screens/Auth'

const AuthStack = createStackNavigator()

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: false,
        title: routesTitle.Auth,
        headerTintColor: COLORS.colorPriamry,
      }}
    >
      <AuthStack.Screen name={RoutesNames.Auth.AuthStack} component={Auth} />

    </AuthStack.Navigator>
  )
}

export default AuthRoutes
