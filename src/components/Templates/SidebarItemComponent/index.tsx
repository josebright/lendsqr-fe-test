import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import './index.scss'

interface SidebarItemProps {
  text: string
  icon: string
  link: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ text, icon, link }) => {
  const [iconSrc, setIconSrc] = useState('')

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

  return (
    <Link to={link} className="styled-link">
      <ListItem button key={text} className="item">
        <ListItemIcon className="item-icon">
          {(iconSrc.length > 0) ? <img src={iconSrc} alt={text} width='18px' /> : null}
        </ListItemIcon>
        <ListItemText primary={text} className="item-text" />
      </ListItem>
    </Link>
  )
}

export default SidebarItem
