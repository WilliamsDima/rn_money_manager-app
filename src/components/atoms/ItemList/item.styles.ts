import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  item: {
    //height: '9%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: COLORS.colorSecondary
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 25,
    marginRight: 20
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
