import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoutesNames } from '../routes-names'
import { screenOptions } from '../routes-config'
import Categories from '../../screens/Categories'
import { COLORS } from '../../services/colors'
import { useTranslation } from 'react-i18next'

const CategoriesStack = createStackNavigator()

const CategoriesRoutes = () => {

  const { t } = useTranslation()

  return (
    <CategoriesStack.Navigator
      screenOptions={{
        ...screenOptions,
        headerShown: true,
        title: t('Categories'),
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
