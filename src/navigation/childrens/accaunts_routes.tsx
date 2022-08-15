import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames } from '../routes-names'
import { screenOptions } from '../routes-config'
import Header from '../../components/organisms/Header'
import Accaunts from '../../screens/Accaunts'

const AccauntsStack = createStackNavigator()

const AccauntsRoutes = () => {
  return (
    <AccauntsStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitle: (props) => <Header {...props} />,
      }}
    >
      <AccauntsStack.Screen name={RoutesNames.Accaunts.HomeStack} component={Accaunts} />
    </AccauntsStack.Navigator>
  )
}

export default AccauntsRoutes
