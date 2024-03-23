import React from 'react'
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

const ProfileNavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <IconButton>
        <NotificationsNoneIcon />
      </IconButton>
      <Avatar alt="User Name" src="/path/to/user/avatar.jpg" />
      <span>User Name</span>
      <IconButton onClick={handleClick}>
        <Avatar alt="User Name" src="/path/to/user/avatar.jpg" /> {/* For dropdown icon */}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default ProfileNavBar
