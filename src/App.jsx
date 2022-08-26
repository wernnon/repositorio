//App.jsx
import './App.css'
import Main from './Componetes/Main/main'
import Sugest from './Componetes/Sugest/sugest'
import Footer from './Componetes/Footer/footer'

function App(){
return(
  
  <div>

    <Main titulo="the lion is goin to day" 
    news="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id cupiditate aliquid eos! Aut illum impedit ullam voluptas placeat incidunt, corrupti laudantium, atque porro ab molestias quas ut. Sequi, in!" 
    image="src/Images/1140X641.jpg" 
    />
    <Sugest/>
      
  </div>
)
}
export default App