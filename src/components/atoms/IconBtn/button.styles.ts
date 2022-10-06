import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLORS.mainColor,
    borderRadius: 10,
    height: 70,
    width: 70,
    maxHeight: 70,
    maxWidth: 70,
  },
})
