import React from 'react'
import { View, Text } from 'react-native'
import { useAppDispatch } from '../../../hooks/hooks'
import { countDiscrementAC, countIncrementAC } from '../../../store/redusers/main/main'
import Button from '../../atoms/Button/Button'
import { styles } from './buttons.styles'

const Buttons = () => {

    const dispatch = useAppDispatch();

    const incrementHandler = () => {
        dispatch(countIncrementAC())
    }

    const discrementHandler = () => {
        dispatch(countDiscrementAC())
    }
  return (
    <View style={styles.btns}>
        <Button overStyle={{width: '40%'}} onPress={incrementHandler}>
            <Text style={{fontSize: 20}}>+</Text>
        </Button>
        <Button overStyle={{width: '40%'}} onPress={discrementHandler}>
            <Text style={{fontSize: 20}}>-</Text>
        </Button>
    </View>
  )
}

export default Buttons
