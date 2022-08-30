import React, { FC } from 'react'
import { Modal, View } from 'react-native'
import { styles } from './modal.styles'
import { IModal } from './modal.types'


const BigModal: FC<IModal> = React.memo(({visible, closeHandler, children}) => {

  const cancelHandler = () => {
      closeHandler(false)
  };

  return (
      <Modal
      visible={visible}
      animationType='slide'
      transparent={true}
      onRequestClose={cancelHandler}>
          
          <View style={[styles.modalStyle]}>

              {children}
                    
          </View>

      </Modal>
  );
});

export default BigModal
