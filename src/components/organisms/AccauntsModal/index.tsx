import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import AccauntsBtnSelect from '../../atoms/AccauntsBtnSelect'
import Input from '../../atoms/Input'
import { styles } from './modal.styles'
import { IExpAndIncModal } from './modal.types'

const AccauntsModal: FC<IExpAndIncModal> = React.memo(({close}) => {

  const [accaunts, setAccaunts] = useState(0)

  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => close(false)}
    style={[styles.container]}>
      <TouchableOpacity 
      activeOpacity={1}
      style={styles.content}>
        <Text style={globalStyles.h3}>Счета:</Text>

        <View style={{marginTop: 20, width: '100%'}}>
            <AccauntsBtnSelect />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  )
})

export default AccauntsModal
