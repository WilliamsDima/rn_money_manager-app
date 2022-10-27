import React, { FC } from 'react'
import { NativeScrollEvent, ScrollView } from 'react-native'
import { ICategories } from '../../../store/redusers/main/types'
import ItemList from '../../atoms/ItemList'
import { styles } from './list.styles'

interface IList {
  data: ICategories[]
  onScroll?: () => NativeScrollEvent
}

const ListData: FC<IList> = ({data, onScroll}) => {

  let content = data.map((item) => <ItemList key={item.id} item={item} data={data}/>);
  
  return (
    <ScrollView 
    style={styles.container}
    onScroll={onScroll}>
        {content}
    </ScrollView>
  )
}

export default ListData
