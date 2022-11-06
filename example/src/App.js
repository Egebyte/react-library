import React from 'react'

import { EgebyteButton } from 'mybutton-egebyte'
import 'mybutton-egebyte/dist/index.css'

const App = () => {
  return (
    <>
      <EgebyteButton type='primary' />
      <EgebyteButton type='default' />
      <EgebyteButton type='dashed' />
      <EgebyteButton type='text' />
      <EgebyteButton type='link' />
    </>
  )
}

export default App
