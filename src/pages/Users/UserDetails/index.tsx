import React from 'react'
import { type IUserRecord } from '../../../utils/Interfaces'
import HeaderWithSidebar from '../../../components/Features/HeaderWithSidebar'
import { Avatar, Box, Button, Divider, Tabs, Tab } from '@mui/material'
import Spacer from '../../../components/Templates/SpacerComponent'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import TabContent from '../../../components/Features/TabContent'
import NotFilledStar from '../../../utils/Assests/star.svg'
import FilledStar from '../../../utils/Assests/filled-star.svg'
import './index.scss'

interface UserDetailsProps {
  user: IUserRecord
  onBack: () => void
}

const tabIdentifiers = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System']

const UserDetails: React.FC<UserDetailsProps> = ({ user, onBack }) => {
  const [value, setValue] = React.useState(tabIdentifiers[0])

  const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
    setValue(newValue)
  }

  const rating = user.UserRating
  const maxRating = 3

  const stars = Array.from({ length: maxRating }, (_, index) => (
    <img
      key={index}
      src={index < rating ? FilledStar : NotFilledStar}
      alt={index < rating ? 'rating' : 'no rating'}
    />
  ))

  return (
    <HeaderWithSidebar>
        <Box className="users-box">
            <button onClick={onBack} className="back-to-users-button">
                <KeyboardBackspaceIcon /> Back to Users
            </button>
            <Spacer height='2rem' />
            <div className="box-container">
                <h3>User Details</h3>
                <div className="button-container">
                    <Button variant="outlined" className="blacklist-button">Blacklist User</Button>
                    <Button variant="outlined" className="activate-button">Activate User</Button>
                </div>
            </div>
            <Spacer height='3rem' />

            <Box className="general-container">
                <Box className="user-profile">
                    <Avatar alt={user.Username} src='https://i.pravatar.cc/150?img' className="avatar" />
                    <div className="user-info">
                        <div className="space-smaller-screen">
                            <div className='title'>{user.PersonalInformation.fullName }</div>
                            <p>{user.id}</p>
                        </div>
                        <Divider orientation="vertical" sx={{ height: '50%' }} />
                        <div className="space-smaller-screen">
                            <div>User’s Tier</div>
                            <Spacer height='0.5rem' />
                            {stars}
                        </div>
                        <Divider orientation="vertical" sx={{ height: '50%' }} />
                        <div className="space-smaller-screen">
                            <div className='title'>{`₦${user.Bank.amount}`}</div>
                            <Spacer height='0.5rem' />
                            <div>{user.Bank.accountNumber}/{user.Bank.bankName}</div>
                        </div>
                    </div>
                </Box>

                <Box className='tab-box'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                    >
                        {tabIdentifiers.map((identifier) => (
                        <Tab key={identifier} value={identifier} label={identifier} />
                        ))}
                    </Tabs>
                </Box>
            </Box>

            <Spacer height='3rem' />
            <TabContent id={value} user={user} />
        </Box>
    </HeaderWithSidebar>
  )
}

export default UserDetails
