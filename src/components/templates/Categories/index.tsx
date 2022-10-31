import React, {useState} from 'react'
import { ScrollView, View } from 'react-native'
import { getItemFromList } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import ButtonsTabMain from '../../atoms/ButtonsTabMain'
import CategoriesList from '../../organisms/CategoriesList'
import { styles } from './categories.styles'
import AddBtn from '../../atoms/AddBtn'
import CustomModal from '../../atoms/Modal'
import CreateCategoriModal from '../../organisms/CreateCategoriModal'

const CategoriesTemplate = () => {

  const { categories } = useAppSelector(state => state.main)

  const [expOrIncom, setExpOrIncom] = useState(false)
  const [categoriId, setCategoriId] = useState(null)

  const [addCategori, setAddCategori] = useState(false)

  const currentCategory = categoriId && getItemFromList(categoriId, categories)

  const closeHandler = () => {
    setCategoriId(null)
    setAddCategori(false)
  }

  return (
    <ScrollView style={styles.container}>
      
        <CustomModal
        visible={addCategori || (currentCategory ? true : false)}
        animationType={'fade'}
        closeHandler={closeHandler}>
          <CreateCategoriModal
          editeMode={currentCategory}
          setModal={closeHandler}/>
        </CustomModal>

        <View style={{marginTop: 20}}>
          <CategoriesList 
          rowSize={2}
          expOrIncom={expOrIncom}
          categoriId={categoriId} 
          setCategoriId={setCategoriId}/>
        </View>

        <View style={{width: '100%', alignItems: 'center', height: 50, marginTop: 20}}>
            <ButtonsTabMain 
            main={false}
            tabValue={expOrIncom}
            setTab={setExpOrIncom}/>
        </View>

        <View style={styles.addBtn}>
          <AddBtn 
          overStyle={{transform: [{scale: 1.3}]}}
          onPress={() => setAddCategori(true)}/>
      </View>
    </ScrollView>
  )
}

export default CategoriesTemplate
