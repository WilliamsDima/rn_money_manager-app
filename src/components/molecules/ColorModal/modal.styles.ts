import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  content: {
    padding: 10,
    borderRadius: 10,
    width: '90%',
    height: '40%',
    maxHeight: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
