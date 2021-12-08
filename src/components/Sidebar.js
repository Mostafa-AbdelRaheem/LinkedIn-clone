import React from 'react';
import '../styles/sidebar.css'
import { Avatar } from '@material-ui/core';
import { selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    // const recentItem =(topic)=>(
    //     <div className="sidebarRecentItem">
    //         <span className="sidebarHash">#</span>
    //         <p>{topic}</p>
    //     </div>
    // );
    return (
    <div className="sidebarContainer">
        <div className="sidebarTop">
            <img className="sidebarTopImage" src="https://i.pinimg.com/originals/42/84/71/428471d4f6c147b88ee7c2cff3efc4cb.jpg" alt=""/>
            <Avatar className="sidebarAvatar" src={user.photoUrl}>{user.displayName[0]}</Avatar>
            <h2 className="sidebarTopName">{user.displayName}</h2>
            <h4 className="sidebarTopEmail">{user.email}</h4>
        </div>
        <div className="sidebarStatus">
            <div className="sidebarStat">
                <p className="sidebarStatText" >Who viewed you</p>
                <p className="sidebarStatNumber">2,453</p>
            </div>
            <div className="sidebarStat">
                <p className="sidebarStatText" >Views on post</p>
                <p className="sidebarStatNumber">2,543</p>
            </div>
        </div>        
        <div className="sidebarBottom">
            <div className="sidebarRecentItem">
                <p className="sidebarBottomHeader" >Recent</p>
                {/* <span className="sidebarHash">#</span> */}
                {/* he made it with function which is not working with me */}
                <p className="sidebarBottomText">#React.Js</p>
                <p className="sidebarBottomText">#Programming</p>
                <p className="sidebarBottomText">#Software Engineering</p>
                <p className="sidebarBottomText">#Design</p>
            </div>          
        </div>
        
    </div>
    );
}
 
export default Sidebar;