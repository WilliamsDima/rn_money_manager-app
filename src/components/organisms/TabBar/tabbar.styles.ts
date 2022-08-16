import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  tab: {
    justifyContent: 'space-between',
    backgroundColor: COLORS.colorBlack,
    ...globalStyles.spaceHorizontal,
    ...globalStyles.spaceVertical,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
