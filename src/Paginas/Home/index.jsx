import React from 'react'
import Main from '../../Componentes/Main/main'
import Sugest from '../../Componentes/Sugest/sugest'

export default function Home() {
  return (
    <div>
      <Main titulo='titulio'
      link='/materia0'
      news='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati impedit, recusandae harum illum exercitationem doloribus ducimus dolore facilis, adipisci iure reprehenderit distinctio officia neque id excepturi minima mollitia quaerat!'
      image='src/Images/1140x641.jpg'
      />
      <Sugest />
    </div>
  )
}
