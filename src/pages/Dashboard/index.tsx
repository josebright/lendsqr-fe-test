import React from 'react'
import Sidebar from '../../components/Features/Sidebar'
import Header from '../../components/Features/Header'

const DashboardPage: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <Sidebar />
      {/* <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p> */}
    </div>
  )
}

export default DashboardPage
