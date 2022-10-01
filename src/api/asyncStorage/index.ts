import AsyncStorage from '@react-native-async-storage/async-storage'

export const localAPI = {
  async get(key: string): Promise<string | undefined> {
    try {
      const res = await AsyncStorage.getItem(key)
      if (!res) {
        throw new Error(`There is no such key as ${key}`)
      }

      return res ? JSON.parse(res) : undefined
    } catch (e) {
      console.log('LOCAL CLIENT ERROR', e)
    }
  },

  async set(key: string, value: any): Promise<void | undefined> {
    try {
      const serialized = JSON.stringify(value)
      return await AsyncStorage.setItem(key, serialized)
    } catch (e) {
      console.log('LOCAL CLIENT ERROR', e)
    }
  },

  async remove(key: string): Promise<void | undefined> {
    try {
      return await AsyncStorage.removeItem(key)
    } catch (e) {
      console.log('LOCAL CLIENT ERROR', e)
    }
  }
}
