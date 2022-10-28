import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  done: {
    marginLeft: 20,
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.colorLightBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    borderColor: COLORS.mainColor,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 20
  },
  check: {
    marginTop: -3,
    width: '40%',
    height: '40%',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.mainColor,
    transform: [{rotate: '45deg'}]
  }
})
