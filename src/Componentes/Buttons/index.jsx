import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div>
        <div className='bar'>
        <button className='button'>Sobre o Ifro</button>
        <button className='button'>Contato</button>
        <button className='button'>Noticias</button>
        <Link to="/about"><button className='button'>Sobre o projeto</button></Link>
        </div>
    </div>
  )
}
