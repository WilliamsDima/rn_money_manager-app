import { StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  content: {
    backgroundColor: COLORS.colorBlack,
    padding: 10,
    borderRadius: 10,
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
    marginTop: 40
  },
  itemText: {
    opacity: 0.3
  }
})
