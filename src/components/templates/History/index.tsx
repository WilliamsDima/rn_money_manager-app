import React, { useState } from 'react'
import { View } from 'react-native'
import { globalStyles } from '../../../services/styles'
import HistoryFilter from '../../molecules/HistoryFilter'
import HistoryStatisticList from '../../molecules/HistoryStatisticList'
import HistoryList from '../../organisms/HistoryList'
import { styles } from './history.styles'
import CustomModal from '../../atoms/Modal'
import HistoryFilterModal from '../../organisms/HistoryFilterModal'
import { useAppSelector } from '../../../hooks/hooks'
import { dataFilterMaxValue, periodSort } from '../../../hooks/helpers'
import DataListEmpty from '../../atoms/DataListEmpty'
import PickerCategories from '../../molecules/PickerCategories'

interface IFilterData {
  type: boolean | string
  sortOrder: boolean | string
}

const HistoryTemplate = () => {

  const { transaction, sort, sortDatePeriod } = useAppSelector(state => state.main)

  const [filter, setFilter] = useState(false)
  const [categori, setCategori] = useState(false)

  const [filterType, setFilterType]: boolean | 'all' = useState('all')
  const [filterOrder, setFilterOrder]: boolean | 'all' = useState('all')
  const [categorySelect, setCategorySelect]: number | null = useState(null)

  let res = [...transaction].reverse()

  res = periodSort(sort, res, sortDatePeriod)

  if (filterType !== 'all') {
    res = res.filter((c) => c.income === filterType && !c.transaction)
  }

  if (filterOrder !== 'all') {
    const filterTransaction = res.filter((c) => !c.transaction)
    res = dataFilterMaxValue(filterTransaction, filterOrder)
  }

  const filterSubmit = (data: IFilterData) => {
    setFilterType(data.type)
    setFilterOrder(data.sortOrder)
    setFilter(false)
  }

  return (
    <>
      <View style={globalStyles.spaceHorizontal}>

        <HistoryFilter setFilter={setFilter} setCategori={setCategori}/>
        <HistoryStatisticList data={res} filterType={filterType}/>
        {res.length ? <HistoryList data={res}/> 
        : <DataListEmpty text={'ничего не найдено'} /> }
        

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
