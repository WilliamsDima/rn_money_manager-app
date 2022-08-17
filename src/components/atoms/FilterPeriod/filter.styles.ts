import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  item: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    position: 'absolute',
    width: '25%',
    height: 1,
    backgroundColor: COLORS.colorPriamry,
    bottom: -5,
  }
})
