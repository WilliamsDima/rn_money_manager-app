import React, { FC } from 'react'
import { Modal, View } from 'react-native'
import { useAppSelector } from '../../../hooks/hooks';
import { getThemeApp } from '../../../services/colors';
import { styles } from './modal.styles';
import { IModal } from './modal.types'


const CustomModal: FC<IModal> = React.memo(({
    visible, closeHandler, 
    animationType = 'slide', children}) => {

    const { themeApp } = useAppSelector(state => state.main)

    const COLORS = getThemeApp(themeApp)

    const cancelHandler = () => {
        closeHandler(false)
    }

    return (
        <Modal
        visible={visible}
        animationType={animationType}
        transparent={true}
        onRequestClose={cancelHandler}>
            
            <View style={[styles.modalStyle, { backgroundColor: COLORS.colorBgModal }]}>

                {children}
                    
            </View>

        </Modal>
    )
})

export default CustomModal
