import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    marginBottom: 10
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  },
  content: {
    backgroundColor: COLORS.colorBlack,
    padding: 10,
    borderRadius: 10,
    width: '90%',
    maxHeight: '80%',
    alignItems: 'center'
  }
})
