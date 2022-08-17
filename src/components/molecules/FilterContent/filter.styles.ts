import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    backgroundColor: COLORS.colorBlack,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addBtn: {
    position: 'absolute',
    right: 10,
    bottom: 10
  },
})
