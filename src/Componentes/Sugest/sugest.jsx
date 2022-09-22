import React from 'react'
import { Link } from 'react-router-dom'
import './sugest.css'

export default function Sugest() {
    const info = [
        {
            img: 'src/Images/1140x641.jpg',
            titulo : 'place holder',
            link: '/materia'
        },
        {
            img: 'src/Images/1140x641.jpg',
            titulo : 'place holder',
            link: '/materia2'
        },
        {
            img: 'src/Images/1140x641.jpg',
            titulo : 'place holder',
            link: '/materia3'
        },
        {
            img: 'src/Images/1140x641.jpg',
            titulo : 'place holder',
            link: '/materia4'
        }
    ]
    const sugest = info.map(
        (c)=> 
        <Link to={c.link}>
            <div className='box'>
                <div className='Img'>
                    <img className='Img'src={c.img}/>
                </div>
                <div className='title1'>
                    {c.titulo}  
                </div>
            </div>
        </Link>
      )
    return (
    <div>
        <div className='sugest'>
            {sugest}
        </div>
        
    </div>
  )
};





