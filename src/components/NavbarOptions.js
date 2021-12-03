import React from 'react';
import '../styles/navbarOptions.css';
import { Avatar } from '@material-ui/core';

const NavbarOptions = ({avatar,Icon,title}) => {
    return (
    <div className="NavbarOptionsContainer">
        {Icon && <Icon className="navbarOptionIcon"/>}
        {avatar&&(<Avatar className="navbarOptionIcon" src={avatar}/>)}
        <h3 className="NavbarOptionstitleContainer">{title}</h3>
    </div>
    );
}
 
export default NavbarOptions;