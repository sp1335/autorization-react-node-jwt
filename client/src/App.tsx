import React, { useEffect,useContext } from 'react';
import LoginForm from './components/LoginForm';
import {Context} from './index'
import { observer } from 'mobx-react-lite';
function App() {
  const {store}=useContext(Context)
  useEffect(()=>{
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  }, [])
  return (
    <>
      <h1> {store.isAuth? `User logged in ${store.user.email}`:'SIGN IN'}</h1>
      <LoginForm/>
    </>
  );
}

export default observer(App);
