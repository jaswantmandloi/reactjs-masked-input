import React from 'react'
import { createMask, destroyMask } from './MaskedUtil'

const MaskedInput = () => {
  return (
    <div>
      <input type="text" onChange={event => {
        event.target.value = createMask(event.target.value)
      }} />
    </div>
  )
}

export default MaskedInput
