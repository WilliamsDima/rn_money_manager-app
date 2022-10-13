import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import ColorModal from '../../molecules/ColorModal'

export const styles = StyleSheet.create({
  content: {
    backgroundColor: COLORS.colorBlack,
    padding: 10,
    borderRadius: 10,
    position: 'relative',
    height: '100%',
    alignItems: 'center',
  },
  
  btn: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  title: {
    ...globalStyles.h1,
    textTransform: 'uppercase',
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.mainColor
  },
  inputWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '50%',
    textAlign: 'center'
  },
  item: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 20
  },
  itemText: {
    opacity: 0.3
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.colorRed
  },
  income: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.colorSecondary
  },
  btnSelect: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
