import React from 'react'
import { Box, Grid } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import MaterialTable from 'material-table'
import HeaderWithSidebar from '../../components/Features/HeaderWithSidebar'
import { useUser } from '../../Hooks/useUser'
import { type IUserRecord } from '../../utils/Interfaces'

const UsersPage: React.FC = () => {
  const { users, loading, error } = useUser()

  console.log('users, loading, error', users, loading, error)

  const columns = [
    {
      title: 'ORGANIZATION',
      render: (rowData: IUserRecord) => (
        <>
          {rowData.OrganizationName}
        </>
      )
    },
    {
      title: 'USERNAME',
      render: (rowData: IUserRecord) => (
        <>
          {rowData.Username}
        </>
      )
    },
    {
      title: 'EMAIL',
      render: (rowData: IUserRecord) => (
        <>
          {rowData.PersonalInformation.emailAddress}
        </>
      )
    },
    {
      title: 'PHONE NUMBER',
      render: (rowData: IUserRecord) => (
        <>
          {rowData.PersonalInformation.phoneNumber}
        </>
      )
    },
    {
      title: 'DATE JOINED',
      render: (rowData: IUserRecord) => (
        <>
          {rowData.DateJoined}
        </>
      )
    },
    {
      title: 'STATUS',
      render: (rowData: IUserRecord) => (
        <>
          {rowData.Status}
        </>
      )
    }
  ]

  if (loading) {
    return (
      <HeaderWithSidebar>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <Skeleton variant="rectangular" width={210} height={118} />
        </Box>
      </HeaderWithSidebar>
    )
  }

  return (
    <HeaderWithSidebar>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <h3>Users</h3>
        <Grid container spacing={2} justifyContent="center">
          {users.map((user, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              {/* Example content, replace with your actual data */}
              <div>
                <p>{user.fullName}</p>
                {/* Add more user details here */}
              </div>
            </Grid>
          ))}
        </Grid>

        <div>
          <MaterialTable
            columns={columns}
            data={users[0].customers}
            options={{
              search: false,
              showTitle: false,
              toolbar: false,
              sorting: false,
              draggable: false,
              pageSize: 20,
              pageSizeOptions: [20, 50, 100],
              headerStyle: {
                fontWeight: 200
              }
            }}
          />
        </div>

      </Box>
    </HeaderWithSidebar>
  )
}

export default UsersPage
