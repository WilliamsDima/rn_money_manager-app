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
    marginTop: 15,
    width: '90%',
    maxHeight: '80%',
    alignItems: 'center',
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  }
})
