import React from 'react'
import { Slidebar } from './Slidebar'
import Header from './Header'
import './Home.css'
import About from './About'

const Home = () => {
  return (
    <div div className='grid-container'>
     <Header/>   
    <Slidebar/>
    <About/>
    </div>
  )
}

export default Home