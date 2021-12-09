import React from 'react';
import '../styles/navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NavbarOptions from './NavbarOptions';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './../features/userSlice';
import { auth } from '../utils/firebase';
import {logout} from '../features/userSlice'



const Navbar = () => {
    const dispatch=useDispatch();
    const logoutOfApp=()=>{
        dispatch(logout())
        auth.signOut();

    };
 
    const user =useSelector(selectUser);
    return (
    <div className="navbarContainer">
        <div className="navbarLeftContainer">
            <div className="imageContainer">
                <img className="image" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>
            </div>
            <div className="navbarSearch">
                <SearchIcon/>
                <input className="searchField" placeholder="Search" type="text" />
            </div>
        </div>

        <div className="navbarRightContainer">
            <NavbarOptions Icon={HomeIcon} title="Home"/>
            <NavbarOptions Icon={SupervisorAccountIcon} title="My Network"/>
            <NavbarOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <NavbarOptions Icon={ChatIcon} title="Messaging"/>
            <NavbarOptions Icon={NotificationsIcon} title="Notifications"/>
            <NavbarOptions avatar={true} title="me"/>
            {user&&(<button className="logoutBtn" onClick={logoutOfApp}>Logout</button>)}
            
        </div>

    </div>
    );
}
 
export default Navbar;