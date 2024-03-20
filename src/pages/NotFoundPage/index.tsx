import React from 'react'
import TextButton from '../../components/Templates/textButtonComponent'
import Spacer from '../../components/Templates/spacerComponent'

const NotFoundPage: React.FC = () => {
  return (
    <div className='container centered-flex'>
      <h1>404!</h1>
      <Spacer width='1rem' />
      <h3>Page Not Found</h3>
      <Spacer width='1rem' />
      <TextButton text='Return HOME' href='/' />
    </div>
  )
}

export default NotFoundPage
