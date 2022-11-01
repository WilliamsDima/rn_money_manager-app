import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    marginLeft: 20,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
  }
})
