import React, { FC } from 'react'
import { View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
import ButtonTabBar from '../../atoms/ButtonTabBar'
import { styles } from './tabbar.styles'
import { ITabBar } from './tabbar.types'

const TabBar: FC<ITabBar> = ({ state, descriptors, navigation }) => {

  const { themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  return (
    <View style={[styles.tab, { backgroundColor: COLORS.colorBlack }]}>
      {state?.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = options.title !== undefined ? options.title : route.name
      
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, { merge: true })
          }
        }

        return (
          <ButtonTabBar
            key={index}
            onPress={onPress}
            isFocused={isFocused}
            assetNames={label as string}/>
        )
      })}
    </View>
  )
}

export default TabBar
