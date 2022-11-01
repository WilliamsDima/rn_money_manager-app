import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  arrow: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  prev: {
    marginTop: -2,
    transform: [{rotate: '90deg'}]
  },
  next: {
    marginTop: 6,
    transform: [{rotate: '-90deg'}]
  }
})
