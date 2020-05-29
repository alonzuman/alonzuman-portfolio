import React, { useState } from 'react';
import './Login.css'
import { Redirect } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    if (username === 'alonzuman7' && password === 'alon123456') {
      localStorage.setItem('token', 'alonzuman7');
      setIsAuth(true);
    } else {
      console.log('fuck off')
    }
  };

  if (isAuth) {
    return <Redirect to='/admin' />
  } else {
    return (
      <div className='form'>
        <label>Username</label>
        <input onChange={e => setUsername(e.target.value)} value={username} type='email' placeholder='john@doe.com' />
        <label>Password</label>
        <input onChange={e => setPassword(e.target.value)} value={password} type='password' placeholder='******' />
        <button className='primary-button' onClick={login}>Log In</button>
      </div>
    )
  }
}
