import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AppBody from './components/AppBody';
import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './utils/firebase';
import {login,logout} from './features/userSlice'


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoURL,
          })
        )
      }else{
        dispatch(logout);
      }
    })
  },[]);
  return (
    <div className="app">
      <Navbar/>
      {!user ? (
        <Login/>
        ) : (
        <AppBody/>
      )}
    </div>
  );
}

export default App;
