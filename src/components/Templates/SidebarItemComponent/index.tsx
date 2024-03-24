import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import './index.scss'

interface SidebarItemProps {
  text: string
  icon: string
  link?: string
  onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({ text, icon, link, onClick }) => {
  const [iconSrc, setIconSrc] = useState('')
  const location = useLocation()

  useEffect(() => {
    const loadIcon = async (): Promise<void> => {
      try {
        const iconModule = await import(`../../../utils/Assests/${icon}`)
        setIconSrc(iconModule.default as string)
      } catch (err) {
        console.error('Failed to load icon:', err)
      }
    }

    void loadIcon()
  }, [icon])

  const isActive = location.pathname === link

  const Content: React.FC = (): JSX.Element => (
    <>
      <ListItem button className={`item ${isActive ? 'active' : ''}`} onClick={onClick}>
        <ListItemIcon className="item-icon">
          {(iconSrc.length > 0) ? <img src={iconSrc} alt={text} width='18px' /> : null}
        </ListItemIcon>
        <ListItemText primary={text} className="item-text" />
      </ListItem>
    </>
  )

  return (link != null)
    ? (
    <Link to={link} className="styled-link">
      <Content />
    </Link>
      )
    : (
    <div className="styled-link">
      <Content />
    </div>
      )
}

export default SidebarItem
