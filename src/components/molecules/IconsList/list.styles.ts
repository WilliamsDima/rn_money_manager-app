import { Dimensions, StyleSheet } from 'react-native'
import { globalStyles } from '../../../services/styles'

export const styles = StyleSheet.create({
  list: {
    
  },
  row: {
    width: Dimensions.get('window').width - globalStyles.spaceHorizontal.paddingHorizontal * 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
