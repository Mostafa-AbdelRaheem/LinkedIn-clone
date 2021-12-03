import React from 'react';
import '../styles/navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NavbarOptions from './NavbarOptions';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


const Navbar = () => {
    return (
    <div className="navbarContainer">
        <div className="navbarLeftContainer">
            <div className="imageContainer">
                <img className="image" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/> 
            </div>
            <div className="navbarSearch">
                <SearchIcon/>
                <input className="searchField" type="text" />
            </div>
        </div>

        <div className="navbarRightContainer">
            <NavbarOptions Icon={HomeIcon} title="Home"/>
            <NavbarOptions Icon={SupervisorAccountIcon} title="My Network"/>
            <NavbarOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <NavbarOptions Icon={ChatIcon} title="Messaging"/>
            <NavbarOptions Icon={NotificationsIcon} title="Notifications"/>
            <NavbarOptions avatar="https://pbs.twimg.com/profile_images/769201881826533376/IhFgf0dO_400x400.jpg" title="Name"/>
        </div>

    </div>
    );
}
 
export default Navbar;