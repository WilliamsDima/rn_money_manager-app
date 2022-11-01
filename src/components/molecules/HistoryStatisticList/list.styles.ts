import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    ...globalStyles.spaceHorizontal,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
})
