import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  tab: {
    justifyContent: 'space-between',
    ...globalStyles.spaceHorizontal,
    ...globalStyles.spaceVertical,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
