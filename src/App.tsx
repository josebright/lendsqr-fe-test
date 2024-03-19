import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/Auth/loginPage'
import DashboardPage from './pages/Dashboard'

const App: React.FC = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const handleLogin = (success: boolean): void => {
    setIsLoggedIn(success)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={isLoggedIn ? '/dashboard' : '/login'} />}
        />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate replace to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
