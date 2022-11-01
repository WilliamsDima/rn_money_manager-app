import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, ToastAndroid, Alert } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getThemeApp } from '../../../services/colors'
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
import { useTranslation } from 'react-i18next'

const CreateCategoriModal: FC<IAccauntCreateModal> = React.memo(({setModal, editeMode}) => {

  const { themeApp } = useAppSelector(state => state.main)

  const COLORS = getThemeApp(themeApp)

  const dispatch = useAppDispatch()
  const { t } = useTranslation()

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
      ToastAndroid.show(t('added'), 2000);
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
      ToastAndroid.show(t('changed'), 2000);
      setModal(false)
    }
  }

  const deleteHandler = () => {
    Alert.alert(
      t('Removal'),
      `${t('Delete_category')} "${editeMode?.name}"?`,
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
            ToastAndroid.show(t('deleted'), 2000);
            setModal(false)
        } }
      ]
    );
  }

  const setColorHandler = (color) => {
    setBg(color)
  }

  return (
    <View style={[styles.content, { backgroundColor: COLORS.colorBlack }]}>

      <CustomModal visible={colorModal} closeHandler={setColorModal}>
        <ColorModal close={setColorModal} submin={setColorHandler} />
      </CustomModal>

      <Text style={[styles.title, { textDecorationColor: COLORS.mainColor }, {color: COLORS.colorText}]}>
        {editeMode ? t('Editing') : t('Create_category')}
      </Text>

      <ScrollView style={{flex: 1, marginTop: 10}}>

        <View style={styles.item}>
          <Text style={[globalStyles.p1,
            income !== undefined ? {color: COLORS.mainColor} : styles.itemText ]}>
            {t('type')}:
          </Text>
        </View>

        <View style={[styles.item, {flexDirection: 'row'}]}>
          <TouchableOpacity 
          onPress={() => setIncome(false)}
          style={[styles.btnSelect, {marginRight: 20}]}>
            <Text style={[globalStyles.p1, {marginRight: 10}, !income 
              ? {color: COLORS.mainColor} : {color: COLORS.colorText}]}>{t('expense')}</Text>
            <View style={[styles.income, { borderColor: COLORS.colorSecondary }, 
              !income && {backgroundColor: COLORS.mainColor, borderColor: COLORS.mainColor}]}/>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => setIncome(true)}
          style={[styles.btnSelect]}>
            <Text style={[globalStyles.p1, {marginRight: 10}, income 
              ? {color: COLORS.mainColor} : {color: COLORS.colorText}]}>{t('income')}</Text>
            <View style={[styles.income, { borderColor: COLORS.colorSecondary }, 
              income && {backgroundColor: COLORS.mainColor, borderColor: COLORS.mainColor}]}/>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Text style={[globalStyles.p1, {color: COLORS.colorText},
            icon ? {color: COLORS.mainColor} : styles.itemText ]}>
            {t('icon')}:
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <IconsList iconName={icon} setId={setIcon} bg={bg}/>
        </View>

        <View style={[styles.item, {marginTop: -20}]}>
          <Text style={[globalStyles.p1, {color: COLORS.colorText},
            bg ? {color: COLORS.mainColor} : styles.itemText]}>
            {t('color')}:
          </Text>
        </View>

        <TouchableOpacity 
        onPress={() => setColorModal(true)}
        style={{marginTop: 20}}>
            <View style={[styles.circle, { backgroundColor: COLORS.colorRed}, 
              bg && {backgroundColor: bg}]}/>
        </TouchableOpacity>

        <View style={[styles.item, {paddingBottom: 70}]}>
          <Text style={[globalStyles.p1, {color: COLORS.colorText}, 
            name ? {color: COLORS.mainColor} : styles.itemText]}>
            {t('name')}:</Text>
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
          <Text style={[globalStyles.p2, {color: COLORS.colorRed, textTransform: 'uppercase'}]}>
            {t('delete')}
          </Text>
        </Button>}

        <Button onPress={editeMode ? saveHandler : addHandler} disabled={!disabled}>
          <Text style={[globalStyles.p2, {color: COLORS.colorBlack, textTransform: 'uppercase'}]}>
            {editeMode ? t('save') : t('add')}
          </Text>
        </Button>
      </View>
    </View>
  )
})

export default CreateCategoriModal
