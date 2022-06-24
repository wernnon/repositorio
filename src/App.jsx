//App.jsx
import './App.css'

function App(){
return(
  <div className='body'>
    <div className='corpo'>
      <div className='box'>
      <div className='box1'>
        Processos
      </div>
      <div className='descr'>
        Processos relacinado ao combate do COVID-19
      </div>
      </div>
      <div className='box'>
        <div className='box1'>
          Contatos
        </div>
        <div className='descr'>
          Contatos relacionados ao combate do COVID-19
        </div>
      </div>
    </div>
    <div className='corpo'>
        <div className='large_box'>
          <div className='box2'>
            Licitações e compras diretas(Dispesas)
          </div>
          <div className='descr'>
            Compras destinadas ao enfrentamento e combate a COVID-19
          </div>
        </div>      
    </div>
    <div className='corpo'>
    <div className='box'>
      <div className='box3'>
      Receitas Federais
      </div>
      <div className='descr'>
      Receitas Federais destinadas ao bombate a COVID-19
      </div>
      <div className='valor'>
        Arrecadada: 73.082,40
      </div>
      </div>
      <div className='box'>
        <div className='box3'>
          Receitas Estaduais
        </div>
        <div className='descr'>
          receitas etaduais destinadas ao bombate a COVID-19
        </div>
        <div className='valor'>
        Arrecadada: 0,00
        </div>
      </div>
    </div>
    <div className='corpo'>
      <div className='box'>
        <div className='box4'>
          Empenhos
        </div>
        <div className='descr'>
          <p>Despesas empenhadas destinadas ao enfrentamento e</p> 
          combate a COVID-19
        </div>
        <div className='valor'>
          <p>Valor atualizado: 0,00</p>
          Restos: 32.338,04
        </div>
      </div>
      <div className='box'>
        <div className='box4'>
          Liquidações
        </div>
        <div className='descr'>
          <p>Despesas liquidadas destinadas ao enfrentamento</p> 
          e combate a COVID-19
        </div>
        <div className='valor'>
          Valor atualizado: 20.137,02
        </div>
      </div>
      <div className='box'>
        <div className='box4'>
          Pagamentos
        </div>
        <div className='descr'>
          <p>Despesas pagas destinadas ao enfrentamento </p> 
          e combate a COVID-19
        </div>
        <div className='valor'>
          Valor atualizado: 20.137,02
        </div>
      </div>
    </div>
  </div> 
)
}
export default App