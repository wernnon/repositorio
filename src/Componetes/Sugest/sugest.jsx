import React from 'react'

export default function Sugest(props) {
  return (
    <div className='sugest'>
        <div className='box'>
            <div className='secImg'>
                <img className='botImg' src={props.image}/>
            </div>
            <div className='title2'>
                {props.titulo}
            </div>
        </div>
    </div>
  )
}





