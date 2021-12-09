import React,{useEffect, useState} from 'react';
import '../styles/feed.css'
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons';
import FeedPostOption from './FeedPostOption';
import Post from './Post';
import { db } from '../utils/firebase';
import firebase from 'firebase';
import { selectUser } from './../features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';



const Feed = () => {
    const user=useSelector(selectUser);
    const [posts,setPosts]=useState([]);
    const [input,setInput]=useState("");



    useEffect(()=>{
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
        setPosts(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        ))
    },[]);


const sendPost=(e)=>{
    e.preventDefault();

    db.collection("posts").add({
        name:user.displayName,
        description:user.email,
        message:input,
        photoUrl:user.photoUrl||"",
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");

};


    return (
    <div className="feedContainer">
        <div className="feedPostContainer">
            <div className="feedPost">
                <Create/>
                <form className="feedPostForm">
                    <input className="feedPostInput" value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                    <button className="feedPostInputBtn" onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feedPostOptionContainer">
                <FeedPostOption Icon={Image} title="Photo" color="#70B5F9"/>
                <FeedPostOption Icon={Subscriptions} title="Video" color="#E7A33E"/>
                <FeedPostOption Icon={EventNote} title="Event" color="#C0CBCD"/>
                <FeedPostOption Icon={CalendarViewDay} title="Wrtie Article" color="#7FC15E"/>

            </div>
        </div>

        <FlipMove>
        {posts.map(({id,data:{name,description,message,photoUrl}})=>(
            <Post 
            key={id} 
            name={name} 
            description={description} 
            message={message} 
            photoUrl={photoUrl} />
        ))}
        </FlipMove>
    </div>
    );
}
 
export default Feed;