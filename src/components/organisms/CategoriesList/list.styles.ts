import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  list: {
    height: 300,
  },
  row: {
    width: Dimensions.get('window').width + 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
