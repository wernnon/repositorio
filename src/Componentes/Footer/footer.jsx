import { Link } from 'react-router-dom'
import React from 'react'
import './Footercss.css'


function Footer(){
    const Footer = [{
        img: <img src='src/Images/infro.jpg' width={15}></img>,
        item: "Escola"
    },
    {
        img: <img src='src/Images/instagram.jpg' width={15}></img>,
        item: "Instagran"   
    },
    {
        img: <img src='src/Images/facebook.png' width={15}></img>,
        item: "Facebook"
    }
]

const rodape = Footer.map(
    (rodape)=>
    {
        return(
        <div className='lista'>
            {img.map}
            <br></br>
            {item.map}
        </div>
        )
    }
)
return(
    
    <footer className='Footer'>
        <ul className='lista'>
            <li>
            <img src='src/Images/infro.jpg' width={15}></img>
                Escola
            </li>
            <li>
            <img src='src/Images/instagram.jpg' width={15}></img>
                Instagram  
            </li>
            <li>
            <img src='src/Images/facebook.png' width={15}></img>
                Facebook 
            </li>
            
        </ul>
        <div>
            {rodape}
        </div>
        
    </footer>
)
}
export default Footer;
