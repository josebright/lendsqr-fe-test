import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './index.scss'

interface HeaderWithSidebarProps {
  children: React.ReactNode
}

const HeaderWithSidebar: React.FC<HeaderWithSidebarProps> = ({ children }) => {
  return (
    <div>
        <Header />
        <Sidebar />
        <main className="container content">
            {children}
        </main>
    </div>
  )
}

export default HeaderWithSidebar
