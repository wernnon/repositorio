import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

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
<<<<<<< HEAD
            <div className='mainImg'>
                <Link to={props.link}>
                    <img className='img' src={props.image}/>
                </Link>
            </div>
=======
                <div className='mainImg'>
                    <Link to={props.link}>
                        <img className='image' src={props.image}/>
                    </Link>                
                </div>
>>>>>>> cd7507ad3649398b0b113f440021be8057640d90
        </div>
    </div>
  )
}
