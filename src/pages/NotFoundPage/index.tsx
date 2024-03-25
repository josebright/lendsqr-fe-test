import React, { useState, useEffect } from 'react'
import TextButton from '../../components/Templates/TextButtonComponent'
import Spacer from '../../components/Templates/SpacerComponent'
import HeaderWithSidebar from '../../components/Features/HeaderWithSidebar'

const NotFoundPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    // Check login state in localStorage
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
  }, [])

  return isLoggedIn
    ? (
    <HeaderWithSidebar>
      <div className='centered-flex'>
        <h1>404!</h1>
        <Spacer width='1rem' />
        <h3>Page Not Found</h3>
        <Spacer width='1rem' />
        <TextButton text='Return HOME' href='/' />
      </div>
    </HeaderWithSidebar>
      )
    : (
    <div className='centered-flex'>
      <h1>404!</h1>
      <Spacer width='1rem' />
      <h3>Page Not Found</h3>
      <Spacer width='1rem' />
      <TextButton text='Return HOME' href='/' />
    </div>
      )
}

export default NotFoundPage
