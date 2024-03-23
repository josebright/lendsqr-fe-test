import React from 'react'
import TextButton from '../../components/Templates/TextButtonComponent'
import Spacer from '../../components/Templates/SpacerComponent'
import HeaderWithSidebar from '../../components/Features/HeaderWithSidebar'

const NotFoundPage: React.FC = () => {
  return (
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
}

export default NotFoundPage
