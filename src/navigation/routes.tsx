import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames } from './routes-names'
import MainRoutes from './childrens/main_routes'

const Stack = createStackNavigator()

const Routes = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RoutesNames.Main.Home} component={MainRoutes} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default Routes
