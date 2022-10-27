import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames } from '../routes-names'
import { screenOptions } from '../routes-config'
import { COLORS } from '../../services/colors'
import Auth from '../../screens/Auth'
import { useTranslation } from 'react-i18next'

const AuthStack = createStackNavigator()

const AuthRoutes = () => {

  const { t } = useTranslation()
  return (
    <AuthStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: false,
        title: t('Auth'),
        headerTintColor: COLORS.colorPriamry,
      }}
    >
      <AuthStack.Screen name={RoutesNames.Auth.AuthStack} component={Auth} />

    </AuthStack.Navigator>
  )
}

export default AuthRoutes
