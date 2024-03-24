import React from 'react'
import Logo from '../../../utils/Assests/logo.svg'
import SearchBar from '../../Templates/SearchBarComponent'
import ProfileNavBar from '../../Templates/ProfileNavBarComponent'
import './index.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
        <div className="header-section"><img src={Logo} alt="Logo" /></div>
        <div className="header-section"><SearchBar /></div>
        <div className="header-section"><ProfileNavBar /></div>
    </header>
  )
}

export default Header
