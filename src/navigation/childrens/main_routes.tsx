import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames } from '../routes-names'

import Main from '../../screens/Main'
import { screenOptions } from '../routes-config'
import Header from '../../components/organisms/Header'
import History from '../../screens/History'

const MainStack = createStackNavigator()

const MainRoutes = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitle: (props) => <Header {...props} />,
      }}
    >
      <MainStack.Screen name={RoutesNames.Main.HomeStack} component={Main} />
      <MainStack.Screen name={RoutesNames.History.Home} component={History} />
    </MainStack.Navigator>
  )
}

export default MainRoutes
