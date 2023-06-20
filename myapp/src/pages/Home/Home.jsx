import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <About />
    </div>
  )
}

export default Home