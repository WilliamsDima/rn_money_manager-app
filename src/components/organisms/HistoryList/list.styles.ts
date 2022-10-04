import { Dimensions, StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 100,
    backgroundColor:COLORS.colorBlack,
    borderRadius: 10,
    height: '78%',
    //paddingVertical: 10,
  }
})
