import React, { FC, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks'
import { globalStyles } from '../../../services/styles'
import AccauntsBtnSelect from '../../atoms/AccauntsBtnSelect'
import { styles } from './modal.styles'
import { IExpAndIncModal } from './modal.types'

const AccauntsModal: FC<IExpAndIncModal> = React.memo(({close}) => {

  const { accounts } = useAppSelector(state => state.main)

  const [accauntsId, setAccauntsId] = useState(0)

  const setAccauntsHandler = (id) => {
    setAccauntsId(id)
    close()
  }

  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => close(false)}
    style={[styles.container]}>
      <TouchableOpacity 
      activeOpacity={1}
      style={styles.content}>
        <Text style={globalStyles.h3}>Счета:</Text>

        <ScrollView style={{marginTop: 20, width: '100%'}}>
          {accounts.map((item) => {
            return <AccauntsBtnSelect 
            key={item.id} 
            data={item} 
            idSelect={accauntsId}
            setAccauntsHandler={setAccauntsHandler}/>
          })}
        </ScrollView>
      </TouchableOpacity>
    </TouchableOpacity>
  )
})

export default AccauntsModal
