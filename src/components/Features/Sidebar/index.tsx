import React from 'react'
import sidebarData from '../../../utils/SidebarData'
import SidebarItem from '../../Templates/SidebarItemComponent'
import { List, Drawer, Divider } from '@mui/material'
import './index.scss'
import Spacer from '../../Templates/SpacerComponent'

const Sidebar: React.FC = () => {
  return (
    <Drawer className='styled-drawer' variant="permanent" anchor="left">
        <List>
            <Spacer height='7rem' />
            <SidebarItem
                text="Switch Organization"
                icon="briefcase-1.svg"
                link="#"
            />
            <Spacer height='1.5rem' />
            <SidebarItem
                text="Dashboard"
                icon="home-1.svg"
                link="#"
            />
            <Spacer height='0.5rem' />
        </List>

        <List>
            <div className='side-bar-title-text'>CUSTOMERS</div>
            <Spacer height='0.5rem' />
            {sidebarData.CUSTOMERS.map((item) => (
                <SidebarItem
                    key={item.name}
                    text={item.name}
                    icon={item.icon}
                    link={item.link}
                />
            ))}
            <Spacer height='1.5rem' />
            <div className='side-bar-title-text'>BUSINESSES</div>
            <Spacer height='0.5rem' />
            {sidebarData.BUSINESSES.map((item) => (
                <SidebarItem
                    key={item.name}
                    text={item.name}
                    icon={item.icon}
                    link={item.link}
                />
            ))}
            <Spacer height='1.5rem' />
            <div className='side-bar-title-text'>SETTINGS</div>
            <Spacer height='0.5rem' />
            {sidebarData.SETTINGS.map((item) => (
                <SidebarItem
                    key={item.name}
                    text={item.name}
                    icon={item.icon}
                    link={item.link}
                />
            ))}
            <Spacer height='2rem' />
        </List>
        <Divider />
        <List>
            <SidebarItem
                text="Logout"
                icon="sign-out.svg"
                link="#"
            />
            <h6>v1.2.0</h6>
        </List>
    </Drawer>
  )
}

export default Sidebar
