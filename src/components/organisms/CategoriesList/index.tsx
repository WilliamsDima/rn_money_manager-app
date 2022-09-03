import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import CategoriItem from '../../molecules/CategoriItem'
import { styles } from './list.styles'
import { ICategories } from './list.types'

const CategoriesList: FC<ICategories> = ({}) => {

  const { categories } = useAppSelector(state => state.main)
  const test = [...categories, ...categories]
  const countRow = Math.ceil(test.length / 16)

  console.log(test.length);
  
  console.log(Math.ceil(test.length / 16));

  const renderRow = () => {
    let content
    for (let i = 0; i < 3; i++) {
      content = <View style={styles.row} key={i}>
        {test.map((item, i) => {
          return <CategoriItem key={i} item={item}/>
      })}
      </View>
    }
    
    return content
  }
  

  return (
    <ScrollView 
    style={[styles.list]} 
    horizontal={true} 
    pagingEnabled={true}
    showsHorizontalScrollIndicator={true}>
      {renderRow()}
    </ScrollView>
  )
}

export default CategoriesList
