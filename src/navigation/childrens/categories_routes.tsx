import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames } from '../routes-names'
import { screenOptions } from '../routes-config'
import Header from '../../components/organisms/Header'
import Categories from '../../screens/Categories'

const CategoriesStack = createStackNavigator()

const CategoriesRoutes = () => {
  return (
    <CategoriesStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        headerTitle: (props) => <Header {...props} />,
      }}
    >
      <CategoriesStack.Screen name={RoutesNames.Categories.HomeStack} component={Categories} />
    </CategoriesStack.Navigator>
  )
}

export default CategoriesRoutes
