import React, { FC } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import { ICategories } from '../../../store/redusers/main/types'
import ItemList from '../../atoms/ItemList'
import { styles } from './list.styles'

interface IList {
  data: ICategories[]
}

const ListData: FC<IList> = ({data}) => {

  let content = data.map((item) => <ItemList key={item.id} item={item} data={data}/>);
  
  return (
    <ScrollView style={styles.container}>
        {content}
    </ScrollView>
  )
}

export default ListData
