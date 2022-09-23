import './App.css'
import React from 'react'
import Rotas from './Rotas'
import NavBar from './Componentes/NavBar/NavBar'
import Buttons from './Componentes/Buttons/index'
import Footer from './Componentes/Footer/footer'
function App(){
return(
  
  <div>
  <NavBar/>
  <Buttons/>
  
  <Rotas/>
  <div><Footer/></div>
  </div>
  
 
)

}
export default App