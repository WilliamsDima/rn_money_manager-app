import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  item: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  active: {
    borderBottomWidth: 1,
  },
})
