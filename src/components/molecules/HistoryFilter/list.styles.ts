import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: -50,
    ...globalStyles.spaceHorizontal,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  item: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
  },
  btn: {
    flexDirection: 'row'
  }
})
