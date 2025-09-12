import { useState } from 'react'
import Prueba from './secciones/prueba'
import Guerrero from './secciones/Guerrero/index'

import TrophyBoard from './secciones/maldonado'

import Puentes from './secciones/Puentes'




function App() {
  return (
    <>
    <Guerrero />
    <TrophyBoard />
      <Prueba />
      <Puentes />
    </>
  )
}

export default App
