import React from 'react'
import Main from '../../Componentes/Main/main'
import Sugest from '../../Componentes/Sugest/sugest'

export default function Home() {
  return (
    <div>
      <Main titulo='titulio'
      image='src/Images/1140x641.jpg'
      link='/noticia-1'/>
      <Sugest />
    </div>
  )
}
