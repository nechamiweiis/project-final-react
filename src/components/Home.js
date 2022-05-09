import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import { About } from './About';
import { Login } from './Login';
import { Signin } from './Signin';


export const Home = () => {
    return<div className="Home">
        <h1>למצא בקליק</h1>
        <h1>welcome to the site of hashavat aveda</h1>
        <Link to={'/about'}>  אודות</Link><br/>
        <Link to={'/login'}>  כניסה למשתמש רשום</Link><br/>
        <Link to={'/signin'}>  רישום למשתמש חדש</Link><br/>
        <Outlet />
       
        </div>
}