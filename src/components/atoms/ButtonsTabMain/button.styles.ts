import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  tabs: {
    width: '80%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    position: 'relative',
  },
  text: {
    textTransform: 'uppercase'
  },
  item: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    position: 'absolute',
    bottom: -5,
    width: '50%',
    height: 2,
    backgroundColor: COLORS.colorPriamry
  }
})
