import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, ToastAndroid } from 'react-native'
import { useAppDispatch } from '../../../hooks/hooks'
import { COLORS } from '../../../services/colors'
import { globalStyles } from '../../../services/styles'
import { IAccounts } from '../../../store/redusers/main/types'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import IconsList from '../../molecules/IconsList'
import { styles } from './modal.styles'
import { IAccauntCreateModal } from './modal.types'
import CustomModal from '../../atoms/Modal'
import ColorModal from '../../molecules/ColorModal'

const CreateAccauntModal: FC<IAccauntCreateModal> = React.memo(({setModal}) => {

  const dispatch = useAppDispatch()

  const [colorModal, setColorModal] = useState(false)

  const [count, setCount] = useState('0')
  const [icon, setIcon] = useState('')
  const [name, setName] = useState('')
  const [bg, setBg] = useState('')

  const disabled = icon && name && bg && count

  const addHandler = () => {
    
    if (disabled) {
      const data: IAccounts = {
        icon,
        bg,
        name,
        id: + new Date(),
        count: +count.replace(',', '.'),
      }
      console.log('new ADD Accaunt', data);
      // dispatch(addTransaction(data))
      ToastAndroid.show('добавлено', 2000);
      // setModal(false)
    }
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
        Создание счёта
      </Text>

      <ScrollView style={{flex: 1, marginTop: 10}}>

      <View style={styles.inputWrapper}>
        <Input 
            overStyle={styles.input} 
            maxLength={10}
            value={count}
            onChange={({nativeEvent}) => setCount(nativeEvent.text)}
            placeholder={'0'}
            placeholderTextColor={'#333'}
            autoFocus={true} 
            keyboardType={'number-pad'}/>
          <Text style={globalStyles.h2}>RUB</Text>
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
          <Text style={[globalStyles.p1, styles.itemText]}>Название:</Text>
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
        <Button onPress={addHandler} disabled={!disabled}>
          <Text style={[globalStyles.p2, {color: COLORS.colorBlack}]}>
            ДОБАВИТЬ
          </Text>
        </Button>
      </View>
    </View>
  )
})

export default CreateAccauntModal
