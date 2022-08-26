import React from 'react'
import './sugest.css'

export default function Sugest() {
    const info = [
        {
            img: 'src/Images/1140x641.jpg',
            titulo : 'place holder'
        },
        {
            img: 'src/Images/1140x641.jpg',
            titulo : 'place holder'
        },
        {
            img: 'src/Images/1140x641.jpg',
            titulo : 'place holder'
        },
        {
            img: 'src/Images/1140x641.jpg',
            titulo : 'place holder'
        },
        {
            img: 'src/Images/1140x641.jpg',
            titulo : 'place holder'
        },
    ]
    const sugest = info.map(
        (c)=> 
        
            <div className='box'>
                <div className='Img'>
                    <img className='Img'src={c.img}/>
                </div>
                <div className='title'>
                    {c.titulo}  
                </div>
            </div>
      )
    return (
    <div>
        <div className='sugest'>
            {sugest}
        </div>
        
    </div>
  )
};





