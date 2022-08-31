import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 20
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    marginLeft: 20,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.colorLightBlack
  }
})
