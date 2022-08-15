import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RoutesNames } from './routes-names'
import MainRoutes from './childrens/main_routes'
import AccauntsRoutes from './childrens/accaunts_routes'
import CategoriesRoutes from './childrens/categories_routes'
import MoreRoutes from './childrens/more_routes'

const Tab = createBottomTabNavigator()

const Routes = () => {

  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name={RoutesNames.Main.Home} component={MainRoutes} />
        <Tab.Screen name={RoutesNames.Accaunts.Home} component={AccauntsRoutes} />
        <Tab.Screen name={RoutesNames.Categories.Home} component={CategoriesRoutes} />
        <Tab.Screen name={RoutesNames.More.Home} component={MoreRoutes} />
      </Tab.Navigator>
      
    </NavigationContainer>
  )
}

export default Routes
