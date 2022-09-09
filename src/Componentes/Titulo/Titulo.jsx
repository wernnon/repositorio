import React from 'react'
import  './Titulo.css'

export default function Titulo(props) {
  return (
    <div>
        <div className='titulo'>
            {props.manch}
        </div>
        <div className='image'>
          <img className='img'src={props.img}/>
        </div>
    </div>
  )
}
