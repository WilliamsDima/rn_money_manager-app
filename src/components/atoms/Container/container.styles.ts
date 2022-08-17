import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //...globalStyles.spaceHorizontal,
    backgroundColor: COLORS.colorLightBlack
  }
})
