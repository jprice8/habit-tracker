import { Dialog, Transition } from '@headlessui/react'
import React from 'react'

const SettingsModal = ( props ) => {
  return (
    <Transition.Root>
      <Dialog>
        <Transition.Child></Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default SettingsModal