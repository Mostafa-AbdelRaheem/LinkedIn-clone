import React from 'react';
import '../styles/feedPostOption.css'
const FeedPostOption = ({Icon,title,color}) => {
    return (
    <div className="feedPostOption">
        <Icon style={{color:color}}/>
        <h4>{title}</h4>
    </div>
    );
}
 
export default FeedPostOption;