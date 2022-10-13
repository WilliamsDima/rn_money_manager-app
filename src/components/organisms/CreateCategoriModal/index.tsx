import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, ToastAndroid, Alert } from 'react-native'
import { useAppDispatch } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { ICategories } from '../../../store/redusers/main/types'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import IconsList from '../../molecules/IconsList'
import { styles } from './modal.styles'
import { IAccauntCreateModal } from './modal.types'
import CustomModal from '../../atoms/Modal'
import ColorModal from '../../molecules/ColorModal'
import { addCategori, deleteCategori, editeCategori } from '../../../store/redusers/main/main'

const CreateCategoriModal: FC<IAccauntCreateModal> = React.memo(({setModal, editeMode}) => {

  const dispatch = useAppDispatch()

  const [colorModal, setColorModal] = useState(false)

  const [icon, setIcon] = useState(editeMode?.icon || '')
  const [name, setName] = useState(editeMode?.name || '')
  const [bg, setBg] = useState(editeMode?.bg || '')
  const [income, setIncome] = useState(editeMode !== null ? editeMode?.income : false)

  const disabled = icon && name && bg

  const addHandler = () => {
    
    if (disabled) {
      const data: ICategories = {
        icon,
        bg,
        name,
        id: +new Date(),
        count: 0,
        income,
      }
      dispatch(addCategori(data))
      ToastAndroid.show('добавлено', 2000);
      setModal(false)
    }
  }

  const saveHandler = () => {
    
    if (disabled) {
      const data: ICategories = {
        icon,
        bg,
        name,
        id: editeMode?.id,
        count: 0,
        income,
      }
      dispatch(editeCategori(data))
      ToastAndroid.show('изменено', 2000);
      setModal(false)
    }
  }

  const deleteHandler = () => {
    Alert.alert(
      "Удаление",
      `Удалить категорию "${editeMode?.name}"?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          const data = {
            id: editeMode?.id,
          }
            dispatch(deleteCategori(data))
            ToastAndroid.show('удалено', 2000);
            setModal(false)
        } }
      ]
    );
  }

  const setColorHandler = (color) => {
    setBg(color)
  }

  return (
    <View style={[styles.content]}>

      <CustomModal visible={colorModal} closeHandler={setColorModal}>
        <ColorModal close={setColorModal} submin={setColorHandler} />
      </CustomModal>

      <Text style={styles.title}>
        {editeMode ? 'Редактирование' : 'Создание категории'}
      </Text>

      <ScrollView style={{flex: 1, marginTop: 10}}>

        <View style={styles.item}>
          <Text style={[globalStyles.p1,
            income !== undefined ? {color: COLORS.mainColor} : styles.itemText ]}>
            Тип:
          </Text>
        </View>

        <View style={[styles.item, {flexDirection: 'row'}]}>
          <TouchableOpacity 
          onPress={() => setIncome(false)}
          style={[styles.btnSelect, {marginRight: 20}]}>
            <Text style={[globalStyles.p1, {marginRight: 10}, !income 
              && {color: COLORS.mainColor}]}>Траты</Text>
            <View style={[styles.income, !income && {backgroundColor: COLORS.mainColor}]}/>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => setIncome(true)}
          style={[styles.btnSelect]}>
            <Text style={[globalStyles.p1, {marginRight: 10}, income 
              && {color: COLORS.mainColor}]}>Доход</Text>
            <View style={[styles.income, income && {backgroundColor: COLORS.mainColor}]}/>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Text style={[globalStyles.p1,
            icon ? {color: COLORS.mainColor} :styles.itemText ]}>
            Иконка:
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <IconsList iconName={icon} setId={setIcon} bg={bg}/>
        </View>

        <View style={[styles.item, {marginTop: -20}]}>
          <Text style={[globalStyles.p1, 
            bg ? {color: COLORS.mainColor} : styles.itemText]}>
            Цвет:
          </Text>
        </View>

        <TouchableOpacity 
        onPress={() => setColorModal(true)}
        style={{marginTop: 20}}>
            <View style={[styles.circle, bg && {backgroundColor: bg}]}/>
        </TouchableOpacity>

        <View style={[styles.item, {paddingBottom: 70}]}>
          <Text style={[globalStyles.p1, name ? {color: COLORS.mainColor} : styles.itemText]}>Название:</Text>
          <View style={[styles.inputWrapper, {width: '100%', marginTop: 0}]}>
            <Input
              value={name}
              onChange={({nativeEvent}) => setName(nativeEvent.text)}
              overStyle={{width: '100%'}}
              maxLength={40}
              placeholderTextColor={'#333'}
              multiline={true}/>
          </View>
        </View>

      </ScrollView>

      <View style={styles.btn}>
        {editeMode && <Button 
        onPress={deleteHandler} 
        overStyle={{backgroundColor: 'transparent'}}>
          <Text style={[globalStyles.p2, {color: COLORS.colorRed}]}>
            УДАЛИТЬ
          </Text>
        </Button>}

        <Button onPress={editeMode ? saveHandler : addHandler} disabled={!disabled}>
          <Text style={[globalStyles.p2, {color: COLORS.colorBlack}]}>
            {editeMode ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}
          </Text>
        </Button>
      </View>
    </View>
  )
})

export default CreateCategoriModal
