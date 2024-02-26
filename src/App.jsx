import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './compo/Nabvar/Navbar'
import ItemList from './compo/ListaItems/ItemList'

function App() {
return (
  <>
  <Navbar />
  <ItemList greeting={'Bienvenidos'} />
  </>
)

  
}

export default App
