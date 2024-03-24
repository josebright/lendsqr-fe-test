import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { makeServer } from './api/server'
import LoginPage from './pages/Auth/loginPage'
import UsersPage from './pages/Users'
import NotFoundPage from './pages/NotFoundPage'
import CircularIndeterminate from './components/Templates/PreLoader'

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6'
    }
  }
})

const App: React.FC = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      makeServer()
    }

    // Check login state in localStorage
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)
    setIsLoading(false)
  }, [])

  const handleLogin = (success: boolean): void => {
    setIsLoggedIn(success)
    if (success) {
      localStorage.setItem('isLoggedIn', 'true')
    } else {
      localStorage.removeItem('isLoggedIn')
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <Router>
      {isLoading
        ? (
            <CircularIndeterminate />
          )
        : (
            <Routes>
              <Route
                path="/"
                element={<Navigate replace to={isLoggedIn ? '/users' : '/login'} />}
              />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/users" element={isLoggedIn ? <UsersPage /> : <Navigate replace to="/login" />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          )
      }
    </Router>
    </ThemeProvider>
  )
}

export default App
