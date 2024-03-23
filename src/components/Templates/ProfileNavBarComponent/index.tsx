import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, IconButton, Menu } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import './index.scss'

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
    <div className="profile-nav-bar">
        <Link className="profile-text-button" to='#'>
            Docs
        </Link>
        <IconButton className="icon-button">
            <NotificationsNoneIcon className="icon" />
        </IconButton>
        <Avatar alt="User Name" src="/path/to/user/avatar.jpg" className="avatar" />
        <span className="user-name" onClick={handleClick}>
            User Name
            <ArrowDropDownIcon className="icon" />
        </span>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className="menu"
        >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
    </div>
  )
}

export default ProfileNavBar
