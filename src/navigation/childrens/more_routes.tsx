import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames } from '../routes-names'
import { screenOptions } from '../routes-config'
import Header from '../../components/organisms/Header'
import More from '../../screens/More'

const MoreStack = createStackNavigator()

const MoreRoutes = () => {
  return (
    <MoreStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTintColor: 'red',
        headerTitle: (props) => <Header {...props} />,
      }}
    >
      <MoreStack.Screen name={RoutesNames.More.HomeStack} component={More} />
    </MoreStack.Navigator>
  )
}

export default MoreRoutes
