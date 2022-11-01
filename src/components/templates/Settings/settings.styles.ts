import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  container: {
    ...globalStyles.spaceHorizontal,
    paddingTop: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
})
