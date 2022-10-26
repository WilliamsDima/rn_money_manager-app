import React, { FC, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import FilterBtnSelect from '../../atoms/FilterBtnSelect'
import { styles } from './modal.styles'
import { IHistoryModal } from './modal.types'
import { useTranslation } from 'react-i18next'

const HistoryFilterModal: FC<IHistoryModal> = React.memo(({close, submit, 
  typeValue, sortOrderValue}) => {

  const { t } = useTranslation()

  const [type, setType] = useState(typeValue)
  const [sortOrder, setSortOrder] = useState(sortOrderValue)

  const dataType = [
    {
      id: 0,
      title: t('all'),
      value: 'all',
    },
    {
      id: 1,
      title: t('expense'),
      value: false,
    },
    {
      id: 2,
      title: t('income'),
      value: true,
    },
  ]

  const countType = [
    {
      id: 0,
      title: t('in_order'),
      value: 'all',
    },
    {
      id: 1,
      title: t('Descending'),
      value: false,
    },
    {
      id: 2,
      title: t('Ascending'),
      value: true,
    },
  ]

  const submitHandler = () => {
    const data = {
      type,
      sortOrder,
    }
    submit(data)
  }

  const resetFilter = () => {
    submit(null)
  }
  

  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => close(false)}
    style={[styles.container]}>
      <TouchableOpacity 
      activeOpacity={1}
      style={styles.content}>

        <ScrollView style={{width: '100%'}}>
          <Text style={globalStyles.p2}>{t('type')}:</Text>
          {dataType.map((item) => {
            return <FilterBtnSelect 
            key={item.id} 
            data={item} 
            isValue={type}
            setValue={setType}/>
          })}
          <Text style={[globalStyles.p2, {marginTop: 10}]}>{t('regularize')}:</Text>
          {countType.map((item) => {
            return <FilterBtnSelect 
            key={item.id} 
            data={item} 
            isValue={sortOrder}
            setValue={setSortOrder}/>
          })}
        </ScrollView>

        <View style={styles.btnGroup}>
          <TouchableOpacity
          onPress={() => close(false)}>
            <Text style={[globalStyles.p1, {color: COLORS.colorRed}]}>{t('cancel')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={resetFilter}>
            <Text style={[globalStyles.p1]}>{t('reset')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={submitHandler}>
            <Text style={[globalStyles.p1, {color: COLORS.mainColor}]}>{t('apply')}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  )
})

export default HistoryFilterModal
