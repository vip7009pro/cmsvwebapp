import React from 'react'
import "../Sidebar/sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration: "none"}}>
          <span className='logo'>CMSV ERP</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <Inventory2Icon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <BorderColorIcon className='icon' />
            <span>Orders</span>
          </li>
          <p className='title'>SUB1</p>
          <li>
            <DeliveryDiningIcon className='icon' />
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <p className='title'>SUB2</p>
          <li>
            <NotificationsActiveIcon className='icon' />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsSuggestIcon className='icon' />
            <span>System</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
}
