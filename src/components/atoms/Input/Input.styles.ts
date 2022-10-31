import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.mainColor,
    ...globalStyles.h2,
    color: COLORS.colorText
  }
})
