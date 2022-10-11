import React, { FC, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { getItemFromList, months, numberConverter } from '../../../hooks/helpers'
import { useAppSelector } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { EDIT } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import { IAccounts, ICategories } from '../../../store/redusers/main/types'
import Avatar from '../../atoms/Avatar'
import CustomModal from '../../atoms/Modal'
import ExpAndIncModal from '../../organisms/ExpAndIncModal'
import { styles } from './modal.styles'
import { IHistoryInfo } from './modal.types'

const HistoryInfoModal: FC<IHistoryInfo> = React.memo(({close, data}) => {

  const [editModal, setEditModal] = useState(false)

  const { categories, accounts } = useAppSelector(state => state.main)

  const currentCategori: ICategories = data && getItemFromList(data.categori, categories)
  const currentAccaunt: IAccounts = data && getItemFromList(data.accounts, accounts)

  const date = new Date(data?.date)

  const dateDisplay = date.getDate() + ' ' + months[date.getMonth()] + ' ' 
  + date.getFullYear()


  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => close()}
    style={[styles.container]}>

      <CustomModal visible={editModal ? true : false} 
      closeHandler={setEditModal}>
          <ExpAndIncModal 
          data={editModal}
          setExpAndEncomeModal={setEditModal}/>
      </CustomModal>

      <TouchableOpacity 
      activeOpacity={1}
      style={styles.content}>

        <ScrollView style={{marginTop: 20, width: '100%'}}>
          <View style={styles.item}>
            <Text style={globalStyles.p1} style={{color: COLORS.mainColor}}>
              Валюта: {numberConverter(data?.count)} P
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={[globalStyles.p1, {opacity: 0.6}]}>
              Категория:
            </Text>

            <View 
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              {currentCategori?.name && <Avatar overStyle={styles.icon} bg={currentCategori?.bg}>
                <IconSvg name={currentCategori?.icon} color={COLORS.colorPriamry} />
              </Avatar>}

              <Text style={globalStyles.p1}>
                {data.transaction ? 'перевод' : currentCategori?.name 
                || 'категория удалена'}
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <Text style={[globalStyles.p1, {opacity: 0.6}]}>
              Счёт:
            </Text>

            <View 
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              {currentAccaunt?.name && <Avatar overStyle={styles.icon} bg={currentAccaunt?.bg}>
                <IconSvg name={currentAccaunt?.icon} color={COLORS.colorPriamry} />
              </Avatar>}

              <Text style={globalStyles.p1}>
                {currentAccaunt?.name || 'счёт удален'}
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <Text style={[globalStyles.p1, {opacity: 0.6}]}>
              Дата:
            </Text>

            <View 
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              <Text style={globalStyles.p1}>
                {dateDisplay}
              </Text>
            </View>
          </View>

          { data?.text ? (<View style={styles.item}>
            <Text style={[globalStyles.p1, {opacity: 0.6}]}>
              Комментарий:
            </Text>

            <View 
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              <Text style={globalStyles.p1}>
                {data.text}
              </Text>
            </View>
          </View>) : null}

          
          <View style={styles.btns}>
            <TouchableOpacity onPress={close}>
              <Text style={globalStyles.p1}>Отмена</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => setEditModal(data)}>
              <IconSvg name={EDIT} 
              color={COLORS.mainColor}
              style={{width: 30, height: 30}} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableOpacity>
    </TouchableOpacity>
  )
})

export default HistoryInfoModal
