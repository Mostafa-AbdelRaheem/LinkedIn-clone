import React from 'react';
import '../styles/navbarOptions.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './../features/userSlice';


const NavbarOptions = ({avatar,Icon,title}) => {
    const user = useSelector(selectUser);
    return (
    <div className="NavbarOptionsContainer">
        {Icon && <Icon className="navbarOptionIcon"/>}
        {avatar&&(<Avatar className="navbarOptionIcon" src={user?.photoUrl}>{user?.displayName[0]}</Avatar>)}
        <h3 className="NavbarOptionstitleContainer">{title}</h3>
    </div>
    );
}
 
export default NavbarOptions;