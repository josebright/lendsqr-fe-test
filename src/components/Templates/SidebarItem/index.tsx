import React from 'react';
import { Link } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import './index.scss'


interface SidebarItemProps {
  text: string;
  icon: React.ReactNode;
  link: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ text, icon, link }) => {
  return (
    <Link to={link} className="styled-link">
      <ListItem button key={text} className="item">
        <ListItemIcon className="item-icon">{icon}</ListItemIcon>
        <ListItemText primary={text} className="item-text" />
      </ListItem>
    </Link>
  );
}

export default SidebarItem;
