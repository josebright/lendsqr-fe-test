import React, { useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import MaterialTable from 'material-table'
import moment from 'moment'
import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import HeaderWithSidebar from '../../components/Features/HeaderWithSidebar'
import { useUser } from '../../Hooks/useUser'
import { type IUserRecord } from '../../utils/Interfaces'
import Spacer from '../../components/Templates/SpacerComponent'
import BoxContainer from '../../components/Templates/BoxComponent'
import ErrorComponent from '../../components/Templates/ErrorComponent'
import FilterIcon from '../../utils/Assests/filter-results-button.svg'
import EyeIcon from '../../utils/Assests/eye.svg'
import BlackListIcon from '../../utils/Assests/blacklist-user.svg'
import ActivateUserIcon from '../../utils/Assests/activate-user.svg'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { TableIcons } from '../../utils/Assests/TableIcons'
import Popover from '@mui/material/Popover'
import './index.scss'

const UsersPage: React.FC = () => {
  const tableRef = React.createRef()
  const { users, loading, error } = useUser()
  const customers = users?.[0]?.customers

  // State to manage sorting visibility
  const [filterAnchorEl, setFilterAnchorEl] = React.useState<HTMLElement | null>(null)

  // State for the action menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)

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

  const formatDate = (dateString: string): string => {
    return moment(dateString).format('MMM D, YYYY h:mm A')
  }

  const handleFilterClick = (event: React.MouseEvent<HTMLElement>): void => {
    setFilterAnchorEl(event.currentTarget)
  }

  const handleFilterClose = (): void => {
    setFilterAnchorEl(null)
  }

  const renderColumnTitle = (title: string): JSX.Element => (
    <div className="column-header" onClick={handleFilterClick}>
      {title}
      <img src={FilterIcon} alt="Filter" className="filter-icon" />
    </div>
  )

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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, userId: string): void => {
    setAnchorEl(event.currentTarget)
    setCurrentUserId(userId)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const handleViewDetails = (): void => {
    console.log('View Details', currentUserId)
    handleClose()
  }

  const handleBlacklistUser = (): void => {
    console.log('Blacklist User', currentUserId)
    handleClose()
  }

  const handleActivateUser = (): void => {
    console.log('Activate User', currentUserId)
    handleClose()
  }

  const actionColumn = {
    title: '',
    render: (rowData: IUserRecord) => (
      <>
        <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={(event) => { handleClick(event, rowData.id) }}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} className="custom-menu" PaperProps={{ elevation: 0 }}>
          <MenuItem onClick={handleViewDetails}>
            <img src={EyeIcon} alt="Filter" className="menu-icon" />
            View Details
          </MenuItem>
          <MenuItem onClick={handleBlacklistUser}>
          <img src={BlackListIcon} alt="Filter" className="menu-icon" />
            Blacklist User
          </MenuItem>
          <MenuItem onClick={handleActivateUser}>
            <img src={ActivateUserIcon} alt="Filter" className="menu-icon" />
            Activate User
          </MenuItem>
        </Menu>
      </>
    )
  }

  const columns = [
    {
      title: renderColumnTitle('ORGANIZATION'),
      width: '15%',
      render: (rowData: IUserRecord) => (
        <div className='typography'>
          {rowData.OrganizationName}
        </div>
      )
    },
    {
      title: renderColumnTitle('USERNAME'),
      render: (rowData: IUserRecord) => (
        <div className='typography'>
          {rowData.Username}
        </div>
      )
    },
    {
      title: renderColumnTitle('EMAIL'),
      render: (rowData: IUserRecord) => (
        <div className='typography'>
          {rowData.PersonalInformation.emailAddress}
        </div>
      )
    },
    {
      title: renderColumnTitle('PHONE NUMBER'),
      render: (rowData: IUserRecord) => (
        <div className='typography'>
          {rowData.PersonalInformation.phoneNumber}
        </div>
      )
    },
    {
      title: renderColumnTitle('DATE JOINED'),
      render: (rowData: IUserRecord) => (
        <div className='typography'>
          {formatDate(rowData.DateJoined)}
        </div>
      )
    },
    {
      title: renderColumnTitle('STATUS'),
      render: (rowData: IUserRecord) => (
        <div className={`status ${rowData.Status.toLowerCase()}`}>
          {rowData.Status}
        </div>
      )
    },
    actionColumn
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
        <div className='material-table'>
          <MaterialTable
            tableRef={tableRef}
            icons={TableIcons}
            columns={columns}
            data={customers ?? []}
            options={{
              showFirstLastPageButtons: false,
              search: false,
              showTitle: false,
              toolbar: false,
              sorting: false,
              draggable: false,
              pageSize: 20,
              pageSizeOptions: [20, 50, 100],
              headerStyle: {
                fontWeight: 600,
                fontSize: '12px',
                color: '#545F7D'
              }
            }}
            localization = {{
              pagination: {
                labelDisplayedRows: '{from}-{to} of {count}',
                labelRowsPerPage: 'Showing',
                labelRowsSelect: ''
              }
            }}
          />
        </div>
        <Spacer height='5rem' />
      </Box>
      <Popover
        id="filter-form-popover"
        open={Boolean(filterAnchorEl)}
        anchorEl={filterAnchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <div className="filter-form">
          <div className="filter-subform">

            <div className='form-typography'>
              Organization
            </div>
            <FormControl fullWidth>
              <InputLabel>Select</InputLabel>
              <Select defaultValue="" label="Organization">
                <MenuItem value="org1">Org 1</MenuItem>
                <MenuItem value="org2">Org 2</MenuItem>
              </Select>
            </FormControl>

            <div className='form-typography'>
              Username
            </div>
            <TextField fullWidth label="User" variant="outlined" />

            <div className='form-typography'>
              Email
            </div>
            <TextField fullWidth label="Email" variant="outlined" />

            <div className='form-typography'>
              Date
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Date" />
              </DemoContainer>
            </LocalizationProvider>

            <div className='form-typography'>
              Phone Number
            </div>
            <TextField fullWidth label="Phone Number" variant="outlined" />

            <div className='form-typography'>
              Status
            </div>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select defaultValue="" label="Status">
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='buttons'>
              <Button variant="outlined" onClick={handleFilterClose}>Reset</Button>
              <Button variant="contained" className='filter-button'>Filter</Button>
          </div>
        </div>
      </Popover>
    </HeaderWithSidebar>
  )
}

export default UsersPage
