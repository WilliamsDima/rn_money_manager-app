import React, { FC, useRef } from 'react'
import { Animated, StyleSheet, View, ViewStyle } from 'react-native'
import { COLORS } from '../../../services/colors'
import GreenWrapper from '../GreenWrapper'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    // zIndex: 1,
  },
})

interface IScrollContainer {
  overStyle?: ViewStyle
}

const ScrollContainer: FC<IScrollContainer> = ({
  children,
  overStyle,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current

  return (
    <View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        style={[{backgroundColor: COLORS.colorLightBlack}, overStyle]}
      >
        {children}
      </Animated.ScrollView>
    </View>
  )
}

export default ScrollContainer
