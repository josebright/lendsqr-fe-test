import React from 'react'
import HeaderWithSidebar from '../../components/Features/HeaderWithSidebar'
import { useUser } from '../../Hooks/useUser'

const UsersPage: React.FC = () => {
  const { users, loading, error } = useUser()

  console.log('users, loading, error', users, loading, error)
  return (
    <HeaderWithSidebar>
      <div>
        <h1>Page Title</h1>
        <p>This is the content of a specific page.</p>
      </div>
    </HeaderWithSidebar>
  )
}

export default UsersPage
