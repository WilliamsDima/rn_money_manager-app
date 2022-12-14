import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  tabs: {
    width: '80%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    position: 'relative',
  },
  text: {
    textTransform: 'uppercase'
  },
  item: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    position: 'absolute',
    bottom: -5,
    width: '50%',
    height: 2,
  }
})
