import React, { useState } from 'react'
import Container from '../../atoms/Container'
import AccauntsBtn from '../../molecules/AccauntsBtn'
import AccauntsList from '../../organisms/AccauntsList'
import CustomModal from '../../atoms/Modal'
import CreateAccauntModal from '../../organisms/CreateAccauntModal'
import TransactionModal from '../../organisms/TransactionModal'

const AccauntsTemplate = () => {

  const [createAccaunt, setCreateAccaunt] = useState(false)
  const [editeMode, setEditeMode] = useState(false)
  const [modalTransaction, setModalTransaction] = useState(false)

  const closeHandler = () => {
    setCreateAccaunt(false)
    setEditeMode(false)
  }
  

  return (
    <Container>
        <AccauntsList onPress={setEditeMode}/>
        <AccauntsBtn 
          setModal={setCreateAccaunt} 
          setModalTransaction={setModalTransaction}/>

        <CustomModal
        visible={createAccaunt || (editeMode ? true : false)}
        animationType={'fade'}
        closeHandler={closeHandler}>
          <CreateAccauntModal
          editeMode={editeMode}
          setModal={closeHandler}/>
        </CustomModal>

        <CustomModal
        visible={modalTransaction}
        animationType={'fade'}
        closeHandler={setModalTransaction}>
          <TransactionModal
          setModal={setModalTransaction}/>
        </CustomModal>
    </Container>
  )
}

export default AccauntsTemplate
