import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    backgroundColor: COLORS.colorBlack,
    padding: 10,
    borderRadius: 10,
    width: '90%',
    maxHeight: '50%',
    alignItems: 'center'
  }
})
