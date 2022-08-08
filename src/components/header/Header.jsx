import React from 'react'
import './header.css'
import Cta from './Cta'
import Coder from '../../assets/coder.svg'
import HeaderSocials from './HeaderSocials'

const Header = () => {

  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Abdurahmon</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <Cta />

        <HeaderSocials />

        <div className="me">
            <img src={Coder} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header