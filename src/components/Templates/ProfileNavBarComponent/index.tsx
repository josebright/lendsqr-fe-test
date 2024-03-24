/* eslint-disable multiline-ternary */
import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, IconButton, Menu, Skeleton } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useUser } from '../../../Hooks/useUser'
import './index.scss'
import ErrorComponent from '../ErrorComponent'

const ProfileNavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { users, loading, error } = useUser()

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <div className="profile-nav-bar">
      {loading
        ? (
            <>
              <Skeleton variant="text" width={100} height={40} className="profile-text-button" />
              <Skeleton variant="circular" width={40} height={40} className="icon-button" />
              <Skeleton variant="rectangular" width={210} height={40} className="user-name" />
            </>
          ) : (
            <>
              {(error.length > 0) && <ErrorComponent errorMessage={error} />}
              <Link className="profile-text-button" to='#'>
                  Docs
              </Link>
              <IconButton className="icon-button">
                  <NotificationsNoneIcon className="icon" />
              </IconButton>
              <Avatar alt={users[0].fullName} src={users[0].profilePicture} className="avatar" />
              <span className="user-name" onClick={handleClick}>
                  {users[0].fullName}
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
            </>
          )
      }
    </div>
  )
}

export default ProfileNavBar
