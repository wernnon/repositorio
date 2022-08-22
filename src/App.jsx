//App.jsx
import './App.css'

function App(){
  const rodape = [{

    img:<img src='src/Imgs/1140x641.jpg' width={270} ></img>,
    descricao: "Titulo"
    },
    {
      img:<img src='src/Imgs/1140x641.jpg'width={270}></img>,
      descricao: "Titulo"
    },
    {
      img:<img src='src/Imgs/1140x641.jpg'width={270}></img>,
      descricao: "Titulo"
    },
    {
      img:<img src='src/Imgs/1140x641.jpg'width={270}></img>,
      descricao: "Titulo"
    }
  ]
  const sugestao= rodape.map(
    (sugestao)=>{
      return(
        <div className='sugestao'>
          {sugestao.img}
          <br></br>
          {sugestao.descricao}
        </div>
      )

    }
  )
return(
  <div>
    <div className='main'>
        <div className='inform'>
          <div className='title'>
            titulo
          </div>
          <div className='news'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas recusandae obcaecati impedit soluta rerum, molestiae repudiandae dolorum, fugiat nihil excepturi voluptatum ut dolore minus facere. Harum nemo odit fuga.
          </div>
        </div>
        <div className='mainImg'>
            <img className='topimg' src='src/Imgs/1140x641.jpg'/>
        </div>
      </div>

      <div className='mainImg'>
          <img className='topimg' src='src/Imgs/1140x641.jpg'/>

      <div className='sugest'>
        <div className='box'>
          <div className='secimg'>
            <img className='botimg' src='src/Imgs/1140x641.jpg' />
          </div>
          <div className='title2'>
            titulo
          </div>

        </div>
        <div className='box'>
          <div className='secimg'>
            <img className='botimg' src='src/Imgs/1140x641.jpg' />
          </div>
          <div className='title2'>
            titulo
          </div>
        </div>
        <div className='box'>
          <div className='secimg'>
            <img className='botimg' src='src/Imgs/1140x641.jpg' />
          </div>
          <div className='title2'>
            titulo
          </div>
        </div>
        <div className='box'>
          <div className='secimg'>
            <img className='botimg' src='src/Imgs/1140x641.jpg' />
          </div>
          <div className='title2'>
            titulo
          </div>
          
        </div>
        
      </div>













      <div className='divcomponentes'>
        <div className='componentes'>
          {sugestao}
        </div>
      </div>
  </div>
  </div>
  )
}

export default App