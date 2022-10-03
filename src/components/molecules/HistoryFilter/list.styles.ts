import { Dimensions, StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  container: {
    backgroundColor:COLORS.colorBlack,
    borderRadius: 10,
    marginTop: -50,
    height: 50,
    ...globalStyles.spaceHorizontal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
})
