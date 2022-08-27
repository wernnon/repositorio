import React from 'react'
import './main.css'

export default function Main(props) {
  return (
    <div>
        <div className='main'>
            <div className='inform'>
                <div className='Title'>
                     {props.titulo}
                </div>
                <div className='news'>
                    {props.news}
                </div>
            </div>
            <div className='mainImg'>
                <img className='img' src={props.image}/>
            </div>
        </div>
    </div>
  )
}
