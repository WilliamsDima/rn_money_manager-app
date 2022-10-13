import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames, routesTitle } from '../routes-names'
import { screenOptions } from '../routes-config'
import Header from '../../components/organisms/Header'
import Categories from '../../screens/Categories'
import { COLORS } from '../../services/colors'

const CategoriesStack = createStackNavigator()

const CategoriesRoutes = () => {
  return (
    <CategoriesStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        title: routesTitle.Categories,
        headerTintColor: COLORS.colorPriamry,
      }}
    >
      <CategoriesStack.Screen 
      name={RoutesNames.Categories.HomeStack} 
      component={Categories} />
    </CategoriesStack.Navigator>
  )
}

export default CategoriesRoutes
