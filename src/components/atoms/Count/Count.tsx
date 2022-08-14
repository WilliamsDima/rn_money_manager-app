import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { ICount } from './count.types'

const Count: FC<ICount> = ({}) => {

  const count = useAppSelector(state => state.main.count)

  return (
    <View style={{alignItems: 'center', width: '100%', marginBottom: 20}}>
        <Text>{count}</Text>
    </View>
  )
}

export default Count
