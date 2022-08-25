//App.jsx
import './App.css'
import Main from './Componetes/Main/main'
import Sugest from './Componetes/Sugest/sugest'
function App(){
return(
  <div>

      <Main titulo="the lion is goin to day" 
      news="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id cupiditate aliquid eos! Aut illum impedit ullam voluptas placeat incidunt, corrupti laudantium, atque porro ab molestias quas ut. Sequi, in!" 
      image="src/Images/1140X641.jpg" 
      />
      <Sugest image="src/Images/1140X641.jpg" />


      
  </div>
)
}
export default App