import React, { FC, useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, Alert, ToastAndroid } from 'react-native'
import { getItemFromList, months, numberConverter } from '../../../hooks/helpers'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { IconSvg } from '../../../services/icons'
import { EDIT } from '../../../services/iconsName'
import { globalStyles } from '../../../services/styles'
import { deleteTransaction } from '../../../store/redusers/main/main'
import { IAccounts, ICategories } from '../../../store/redusers/main/types'
import Avatar from '../../atoms/Avatar'
import CustomModal from '../../atoms/Modal'
import ExpAndIncModal from '../../organisms/ExpAndIncModal'
import { styles } from './modal.styles'
import { IHistoryInfo } from './modal.types'

const HistoryInfoModal: FC<IHistoryInfo> = React.memo(({close, data}) => {

  const dispatch = useAppDispatch()

  const [editModal, setEditModal] = useState(false)

  const { categories, accounts, transaction } = useAppSelector(state => state.main)

  const isTransaction = getItemFromList(data.id, transaction)

  const currentCategori: ICategories = isTransaction 
  && getItemFromList(isTransaction.categori, categories) || ''

  const currentAccaunt: IAccounts = isTransaction 
  && getItemFromList(isTransaction.accounts, accounts)

  const date = new Date(isTransaction?.date)

  const dateDisplay = date.getDate() + ' ' + months[date.getMonth()] + ' ' 
  + date.getFullYear()

  const deleteHandler = () => {
    Alert.alert(
      "Удаление",
      `Удалить транзакцию "${currentCategori?.name || 'перевод'}" ${data?.count} P?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
            dispatch(deleteTransaction(data))
            ToastAndroid.show('удалено', 2000);
            close()
        } }
      ]
    );
  }

  useEffect(() => {
    console.log('HistoryInfoModal');
  }, [transaction])

  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => close()}
    style={[styles.container]}>

      <CustomModal visible={editModal && !data?.transaction ? true : false} 
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
              Валюта: {numberConverter(isTransaction?.count)} P
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={[globalStyles.p1, {opacity: 0.6}]}>
              Категория:
            </Text>

            <View 
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              {currentCategori?.name && <Avatar overStyle={styles.icon} bg={currentCategori?.bg}>
                <IconSvg 
                  name={currentCategori?.icon}
                  color={COLORS.colorPriamry} 
                  width={25}/>
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
                <IconSvg 
                  name={currentAccaunt?.icon} 
                  color={COLORS.colorPriamry} 
                  width={25}/>
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

          { isTransaction?.text ? (<View style={styles.item}>
            <Text style={[globalStyles.p1, {opacity: 0.6}]}>
              Комментарий:
            </Text>

            <View 
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
              <Text style={globalStyles.p1}>
                {isTransaction.text}
              </Text>
            </View>
          </View>) : null}

          
          <View style={styles.btns}>
            <TouchableOpacity onPress={close}>
              <Text style={globalStyles.p1}>Отмена</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={deleteHandler}>
              <Text style={[globalStyles.p1, {color: COLORS.colorRed}]}>
                Удалить
              </Text>
            </TouchableOpacity>

            {!data?.transaction && <TouchableOpacity
            onPress={() => setEditModal(isTransaction)}>
              <IconSvg name={EDIT} 
              color={COLORS.mainColor}
              style={{width: 30, height: 30}} />
            </TouchableOpacity>}

          </View>
        </ScrollView>
      </TouchableOpacity>
    </TouchableOpacity>
  )
})

export default HistoryInfoModal
