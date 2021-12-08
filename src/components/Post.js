import React,{forwardRef} from 'react';
import { Avatar } from '@material-ui/core';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import '../styles/post.css'
import FeedPostOption from './FeedPostOption';

const Post = forwardRef(({name,description,message,photoUrl},ref) => {
    return (<div ref={ref}className="postContainer">
        <div className="postHeader">
            <Avatar className="Avatarpic" src={photoUrl}>{name[0]}</Avatar>
            <div className="postInfo">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="postBody">
            <p>{message}</p>
        </div>
        <div className="postBtns">
            <FeedPostOption Icon = {ThumbUpAltOutlined} title="like" color="gray"/>
            <FeedPostOption Icon = {ChatOutlined} title="Comment" color="gray"/>
            <FeedPostOption Icon = {ShareOutlined} title="Share" color="gray"/>
            <FeedPostOption Icon = {SendOutlined} title="Send" color="gray"/>
        </div>

    </div>
    );
})
 
export default Post;