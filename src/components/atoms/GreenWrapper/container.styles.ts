import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 50,
    backgroundColor: COLORS.colorHeader,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    ...globalStyles.spaceHorizontal,
  }
})
