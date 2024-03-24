import React from 'react'
import { Box, Grid } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import MaterialTable from 'material-table'
import HeaderWithSidebar from '../../components/Features/HeaderWithSidebar'
import { useUser } from '../../Hooks/useUser'
import { type IUserRecord } from '../../utils/Interfaces'
import Spacer from '../../components/Templates/SpacerComponent'
import BoxContainer from '../../components/Templates/BoxComponent'
import ErrorComponent from '../../components/Templates/ErrorComponent'
import './index.scss'

const UsersPage: React.FC = () => {
  const { users, loading, error } = useUser()
  const customers = users?.[0]?.customers

  if (loading || customers?.length < 1) {
    return (
      <HeaderWithSidebar>
        <Box className="skeleton-centered">
          <Skeleton variant="rectangular" width={210} height={118} />
        </Box>
      </HeaderWithSidebar>
    )
  }

  const activeCustomersCount = customers.filter(customer => customer.Status === 'Active').length
  const customersWithLoan = customers.filter(customer => customer.EducationAndEmployment.loanRepayment > 0).length
  const usersWithPositiveBalanceAfterRepayment = customers.filter(customer => {
    const loanRepayment = (customer.EducationAndEmployment?.loanRepayment ?? 0)
    const bankAmount = (customer.Bank?.amount ?? 0) as unknown as number

    return (bankAmount - loanRepayment) > 0
  }).length

  console.log('testing data', users)

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

  const summaryData = [
    {
      icon: 'users.svg',
      text: 'USERS',
      figure: customers.length
    },
    {
      icon: 'active-users.svg',
      text: 'ACTIVE USERS',
      figure: activeCustomersCount
    },
    {
      icon: 'users-with-loan.svg',
      text: 'USERS WITH LOANS',
      figure: customersWithLoan
    },
    {
      icon: 'users-with-savings.svg',
      text: 'USERS WITH SAVINGS',
      figure: usersWithPositiveBalanceAfterRepayment
    }
  ]

  return (
    <HeaderWithSidebar>
      {error != null && <ErrorComponent errorMessage={error} />}
      <Box className="users-box">
        <h3>Users</h3>
        <Spacer height='2rem' />
        <Grid container spacing={2} justifyContent="center">
          {summaryData.map((data, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
                <BoxContainer icon={data.icon} text={data.text} figure={data.figure} />
            </Grid>
          ))}
        </Grid>
        <Spacer height='2rem' />
        <div className='material-table-content'>
          <MaterialTable
            columns={columns}
            data={customers ?? []}
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

        <Spacer height='5rem' />
      </Box>
    </HeaderWithSidebar>
  )
}

export default UsersPage
