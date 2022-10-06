import React, { useState } from 'react'
import Container from '../../atoms/Container'
import AccauntsBtn from '../../molecules/AccauntsBtn'
import AccauntsList from '../../organisms/AccauntsList'
import CustomModal from '../../atoms/Modal'
import CreateAccauntModal from '../../organisms/CreateAccauntModal'

const AccauntsTemplate = () => {

  const [createAccaunt, setCreateAccaunt] = useState(false)

  return (
    <Container>
        <AccauntsList />
        <AccauntsBtn setModal={setCreateAccaunt}/>

        <CustomModal
        visible={createAccaunt}
        animationType={'fade'}
        closeHandler={setCreateAccaunt}>
          <CreateAccauntModal
          setModal={setCreateAccaunt}/>
        </CustomModal>
    </Container>
  )
}

export default AccauntsTemplate
