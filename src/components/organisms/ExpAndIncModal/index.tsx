import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import CustomModal from '../../atoms/Modal'
import AccauntsModal from '../AccauntsModal'
import CategoriesList from '../CategoriesList'
import { styles } from './modal.styles'
import { IExpAndIncModal } from './modal.types'

const ExpAndIncModal: FC<IExpAndIncModal> = React.memo(({  }) => {

  const { accounts } = useAppSelector(state => state.main)
  const filterAccaunts = accounts.filter((it) => it.id)

  const [modal, setModal] = useState(false)
  const [accauntsId, setAccauntsId] = useState(0)

  return (
    <View style={[styles.content]}>
      <Text style={styles.title}>затраты</Text>
      <View style={styles.inputWrapper}>
        <Input 
            overStyle={styles.input} 
            maxLength={10}
            placeholder={'0'}
            placeholderTextColor={'#333'}
            autoFocus={true} 
            keyboardType={'number-pad'}/>
        <Text style={globalStyles.h2}>RUB</Text>
      </View>

      <View style={styles.item}>
        <Text style={[globalStyles.p1, styles.itemText]}>Выберите счёт:</Text>

        <TouchableOpacity style={{marginTop: 10}}
        onPress={() => setModal(true)}>
          <Text style={[globalStyles.p1, {color: 'red'}]}>счёт не выбран</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1, marginTop: 10}}>

        <View style={styles.item}>
          <Text style={[globalStyles.p1, styles.itemText]}>Выберите категорию:</Text>
        </View>

        <View style={{marginTop: 20}}>
          <CategoriesList />
        </View>

        <View style={[styles.item, {paddingBottom: 100}]}>
          <Text style={[globalStyles.p1, styles.itemText]}>Комментарий:</Text>
          <View style={[styles.inputWrapper, {width: '100%'}]}>
            <Input
              overStyle={{width: '100%'}}
              numberOfLines={2}
              placeholderTextColor={'#333'}
              multiline={true}/>
          </View>
        </View>

      </ScrollView>

      <View style={styles.btn}>
        <Button>
          <Text style={[globalStyles.p2, {color: COLORS.colorBlack}]}>ДОБАВИТЬ</Text>
        </Button>
      </View>

      <CustomModal
        visible={modal}
        animationType={'fade'}
        closeHandler={setModal}>
          <AccauntsModal 
          idSelect={accauntsId} 
          list={filterAccaunts}
          setId={setAccauntsId} 
          close={() => setModal(false)}/>
      </CustomModal>
    </View>
  )
})

export default ExpAndIncModal
