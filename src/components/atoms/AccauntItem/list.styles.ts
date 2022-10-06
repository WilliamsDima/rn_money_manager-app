import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.colorBlack,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
