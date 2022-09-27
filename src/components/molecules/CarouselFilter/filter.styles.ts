import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  text: {
    color: COLORS.colorPriamry
  },
  arrow: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  prev: {
    marginTop: -2,
    transform: [{rotate: '90deg'}]
  },
  next: {
    marginTop: 6,
    transform: [{rotate: '-90deg'}]
  }
})
