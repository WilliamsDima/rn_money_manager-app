import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    ...globalStyles.spaceHorizontal,
    alignItems: 'flex-end'
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
