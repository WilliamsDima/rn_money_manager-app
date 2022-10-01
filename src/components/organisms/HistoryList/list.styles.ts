import { Dimensions, StyleSheet } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 100,
    backgroundColor:COLORS.colorBlack,
    borderRadius: 10,
    marginTop: 10,
    height: '93%',
    ...globalStyles.spaceHorizontal,
    paddingVertical: 10,
  }
})
