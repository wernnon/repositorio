import React from 'react'
import Titulo from '../../Componentes/Titulo/Titulo'
import News from '../../Componentes/News/News'

export default function Noticia2() {
  return (
    <div>
        <Titulo 
        manch='Que manchete sensacional'
        capa='https://picsum.photos/194'/>
        <News 
        News ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam vero voluptatibus quas? Quaerat temporibus doloremque, molestiae itaque suscipit magnam blanditiis? Provident, tenetur ullam dolorum error tempore illum nobis cupiditate.'/>
    </div>
  )
}
