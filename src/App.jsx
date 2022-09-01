//App.jsx
import './App.css'
import Main from './Componentes/Main/main'
import Sugest from './Componentes/Sugest/sugest'
import Footer from './Componentes/Footer/footer'

function App(){
return(
  
  <div>

    <Main titulo="da laon i goin to de" 
    news="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id cupiditate aliquid eos! Aut illum impedit ullam voluptas placeat incidunt, corrupti laudantium, atque porra ab molestias quas ut. Sequi, in!" 
    image="src/Images/1140X641.jpg" 
    />
    
    <Sugest/>
      
  </div>
)
}
export default App