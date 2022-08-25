import React, { FC } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import ItemList from '../../atoms/ItemList';
import { styles } from './list.styles'

interface IList {}

const mok = [{id: 1}, {id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},{id: 12},{id: 13},]

const ListData: FC<IList> = ({}) => {

  let content = mok.map((item) => <ItemList key={item.id} item={item}/>);

  // let content = (<FlatList style={{flex: 1}}
  //   data={mok}
  //   keyExtractor={item => item.id.toString()}
  //   renderItem={(item) => <ItemList item={item}/>}
  //   />);
  
  return (
    <ScrollView style={styles.container}>
        {content}
    </ScrollView>
  )
}

export default ListData
