import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

import '../styles/appbody.css'

const AppBody = () => {
    return (
    <div className="appBodyContainer">
        <Sidebar/>
        <Feed/>
        <Widgets/>
    </div>
    );
}
 
export default AppBody;