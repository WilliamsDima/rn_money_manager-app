import React, { useState } from 'react'
import { View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import HistoryFilter from '../../molecules/HistoryFilter'
import HistoryStatisticList from '../../molecules/HistoryStatisticList'
import HistoryList from '../../organisms/HistoryList'
import CustomModal from '../../atoms/Modal'
import HistoryFilterModal from '../../organisms/HistoryFilterModal'
import { useAppSelector } from '../../../hooks/hooks'
import { dataFilterMaxValue, periodSort } from '../../../hooks/helpers'
import DataListEmpty from '../../atoms/DataListEmpty'
import PickerCategories from '../../molecules/PickerCategories'
import { useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

interface IFilterData {
  type: boolean | string
  sortOrder: boolean | string
}

const HistoryTemplate = () => {

  const route = useRoute()

  const { t } = useTranslation()

  const params = route?.params

  const { transaction, sort, sortDatePeriod } = useAppSelector(state => state.main)

  const [filter, setFilter] = useState(false)
  const [categori, setCategori] = useState(false)

  const [filterType, setFilterType] = useState('all')
  const [filterOrder, setFilterOrder] = useState('all')
  const [categorySelect, setCategorySelect] = useState(params?.id ? [params?.id] : [])

  let res = [...transaction].reverse()

  // сортирую по выбранным категориями если они есть
  if (categorySelect.length) {
    res = res.filter((item) => categorySelect.some((id) => id === item.categori))
  }

  // сортировка по дате
  res = periodSort(sort, res, sortDatePeriod)

  // сортировка по типу - доход или траты
  if (filterType !== 'all') {
    res = res.filter((c) => c.income === filterType && !c.transaction)
  }

  // сортировка по порядвку - убывание, возрастани и т.д. 
  if (filterOrder !== 'all') {
    const filterTransaction = res.filter((c) => !c.transaction)
    res = dataFilterMaxValue(filterTransaction, filterOrder)
  }

  const filterSubmit = (data: IFilterData | null) => {
    setFilterType(data ? data.type : 'all')
    setFilterOrder(data ? data.sortOrder : 'all')
    setFilter(false)
  }

  return (
    <>
      <View style={globalStyles.spaceHorizontal}>

        <HistoryFilter setFilter={setFilter} setCategori={setCategori}/>
        <HistoryStatisticList data={res.length ? res : []} filterType={filterType}/>
        {res.length ? <HistoryList data={res}/> 
        : <DataListEmpty text={t('Nothing_found')} /> }
        

        <CustomModal
        visible={filter}
        animationType={'fade'}
        closeHandler={setFilter}>
          <HistoryFilterModal
          typeValue={filterType}
          sortOrderValue={filterOrder}
          submit={filterSubmit}
          close={() => setFilter(false)}/>
        </CustomModal>

        <CustomModal
        visible={categori}
        animationType={'fade'}
        closeHandler={setCategori}>
          <PickerCategories
          value={categorySelect}
          setId={setCategorySelect}
          close={() => setCategori(false)}/>
        </CustomModal>
      </View>
    </>
  )
}

export default HistoryTemplate
