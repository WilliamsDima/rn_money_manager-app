import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  focus: {
    backgroundColor: COLORS.mainColor,
  },
  image: {
    width: 24,
    height: 24,
  },
})
