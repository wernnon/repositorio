import './App.css'
import Main from './Componentes/Main/main'
import Sugest from './Componentes/Sugest/sugest'
import Footer from './Componentes/Footer/footer'
import Titulo from './Componentes/Titulo/Titulo'
import News from './Componentes/News/News'
import React from 'react'
import Rotas from './Rotas'

function App(){
return(
  
  <div>
  
    <Titulo manch="Em comemoração ao dia do estudante, campus guajará-mirim"
    img='src/Images/1140x641.jpg' />
    <News News='raichoflei'/>
    <Rotas/>
    
  </div>
 
)

}
export default App