import React, { FC } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../services/styles'
import AccauntsBtnSelect from '../../atoms/AccauntsBtnSelect'
import { styles } from './modal.styles'
import { IExpAndIncModal } from './modal.types'
import { useTranslation } from 'react-i18next'
import { COLORS } from '../../../services/colors'

const AccauntsModal: FC<IExpAndIncModal> = React.memo(({close, setId, idSelect, list}) => {

  const { t } = useTranslation()

  const setAccauntsHandler = (id) => {
    setId(id)
    close()
  }

  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => close()}
    style={[styles.container]}>
      <TouchableOpacity 
      activeOpacity={1}
      style={styles.content}>
        <Text style={[globalStyles.h3, {color: COLORS.colorText}]}>{t('Accaunts')}:</Text>

        <ScrollView style={{marginTop: 20, width: '100%'}}>
          {list.map((item) => {
            return <AccauntsBtnSelect 
            key={item.id} 
            data={item} 
            idSelect={idSelect}
            setAccauntsHandler={setAccauntsHandler}/>
          })}
        </ScrollView>
      </TouchableOpacity>
    </TouchableOpacity>
  )
})

export default AccauntsModal
