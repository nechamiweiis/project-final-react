import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Rools } from './Rools';
import axios from 'axios';
import { Link,Outlet,useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.production.min';

export const Signin = () => {
    <Rools/>
    const [nameUser, setnameUser] = useState('');
    const [passwordUser, setPassword] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [phoneUser, setPhone_number] = useState('');
    const [roolsOk, setRoolsOk] = useState(false);
    const navigate = useNavigate();
    useEffect=(signin,roolsOk)=>{}
    const  signin = (e) => { 
        e.preventDefault();

        signinFunc( nameUser,passwordUser,emailUser,phoneUser);
            setnameUser('');
            setPassword('');
            setEmailUser(''); 
            setPhone_number('');
            setRoolsOk(true);
    }

    const signinFunc = ( nameUser,passwordUser,emailUser,phoneUser) => {
        console.log("i am in sign in")
        try {
            console.log("i am in sign--try")
            axios.post("http://localhost:5000/users", {
                nameUser,
                passwordUser,
                emailUser,
                phoneUser
                
            }).then((res) => {
                if (res.data) {
                    console.log(res.data);

                    console.log('user created');
                    navigate('../homeinner')
                }});
        }catch (error) {
            console.error('error to sign in', error);
        }
    }



    return <form onSubmit={signin}>
        <Input type="text" placeholder="name" value={nameUser} name={nameUser}  onChange={e => setnameUser(e.target.value)} prefix={<UserOutlined />} /> <br />
        <Input type="email" placeholder="email" value={emailUser} name={emailUser} onChange={e => setEmailUser(e.target.value)} /> <br />
        <Input type="password" placeholder="password" value={passwordUser} name={passwordUser} onChange={e => setPassword(e.target.value)} /> <br />
        <Input type="text" placeholder="phone number"  value={phoneUser} name={phoneUser} onChange={e => setPhone_number(e.target.value)} /> <br />
        <Input type="checkbox" value={roolsOk} name={roolsOk} onChange={e => setRoolsOk(!roolsOk)} />
        {/* איך עושים שרק כשלוחץ על checkbox מאפשר submit */}
        <button type="submit" disabled={!roolsOk}> sign in </button>
    


    </form>
} 


