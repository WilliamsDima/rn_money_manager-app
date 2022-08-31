import React, { FC } from 'react'
import { Modal, View } from 'react-native'
import { styles } from './modal.styles';
import { IModal } from './modal.types'


const CustomModal: FC<IModal> = React.memo(({
    visible, closeHandler, 
    animationType = 'slide', children}) => {

  const cancelHandler = () => {
      closeHandler(false)
  };

  return (
      <Modal
      visible={visible}
      animationType={animationType}
      transparent={true}
      onRequestClose={cancelHandler}>
          
          <View style={[styles.modalStyle]}>

              {children}
                    
          </View>

      </Modal>
  );
});

export default CustomModal
