import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
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
