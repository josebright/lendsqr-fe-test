import React, { useState } from 'react'
import InputComponent from '../../components/Templates/inputComponent'

interface Props {
  onLogin: (isLoggedIn: boolean) => void
}

const LoginPage: React.FC<Props> = ({ onLogin }): React.ReactElement => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    // Login process
    if (username === 'user' && password === 'pass') {
      onLogin(true)
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputComponent width='447px' type='text' label='Email' />
        <InputComponent width='447px' type='password' label='Password' />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
