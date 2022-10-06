import React, { FC } from 'react'
import { FlatList, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import AccauntItem from '../../atoms/AccauntItem'
import { styles } from './list.styles'
import { ICategoryList } from './list.types'

const AccauntsList: FC<ICategoryList> = ({}) => {

  const { accounts } = useAppSelector(state => state.main)

  const renderItem = ({ item }) => {
      return <AccauntItem data={item} />
  };

  return (
    <View style={styles.container}>
      <FlatList style={{flex: 1, paddingHorizontal: 10}}
        data={accounts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}/>
    </View>
  )
}

export default AccauntsList
