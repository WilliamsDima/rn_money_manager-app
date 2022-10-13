import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames, routesTitle } from '../routes-names'

import Main from '../../screens/Main'
import { screenOptions } from '../routes-config'
import Header from '../../components/organisms/Header'
import History from '../../screens/History'
import { COLORS } from '../../services/colors'

const MainStack = createStackNavigator()

const MainRoutes = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTintColor: COLORS.colorPriamry,
      }}
    >
      <MainStack.Screen 
      options={{
        headerTitle: (props) => <Header {...props} />,
      }} 
      name={RoutesNames.Main.HomeStack} 
      component={Main} />

      <MainStack.Screen 
      options={{
        title: routesTitle.History,
      }} 
      name={RoutesNames.History.Home} 
      component={History} />
    </MainStack.Navigator>
  )
}

export default MainRoutes
