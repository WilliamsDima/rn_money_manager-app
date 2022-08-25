import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  item: {
    height: '7%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: COLORS.colorSecondary
  },
})
