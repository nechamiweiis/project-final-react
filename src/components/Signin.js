import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Rools } from './Rools';
import axios from 'axios';
import { Link,Outlet } from 'react-router-dom';

export const Signin = () => {
    <Rools/>
    const [username, setUsername] = useState('');
    const [passwordUser, setPassword] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [phoneUser, setPhone_number] = useState('');
    const [roolsOk, setRoolsOk] = useState(true);

    const signin = (e) => { 
        e.preventDefault();

        signinFunc( username,passwordUser,emailUser,phoneUser);
            setUsername('');
            setPassword('');
            setEmailUser(''); 
            setPhone_number('');
            setRoolsOk(true);
    }

    const signinFunc = ( username,passwordUser,emailUser,phoneUser) => {
        console.log("i am in sign in")
        try {
            console.log("i am in sign--try")
            const { data: user } = axios.post("http://localhost:5000/users", {
                username,
                passwordUser,
                emailUser,
                phoneUser
                
            });
            if (Response) {
                console.log('user created');
                
              
            }
        }catch (error) {
            console.error('error to sign in', error);
            
        }
    }



    return <form onSubmit={signin}>
        <Input type="text" placeholder="username" value={username} name={username}  onChange={e => setUsername(e.target.value)} prefix={<UserOutlined />} /> <br />
        <Input type="email" placeholder="email" value={emailUser} name={emailUser} onChange={e => setEmailUser(e.target.value)} /> <br />
        <Input type="password" placeholder="password" value={passwordUser} name={passwordUser} onChange={e => setPassword(e.target.value)} /> <br />
        <Input type="text" placeholder="phoneUser"  value={phoneUser} name={phoneUser} onChange={e => setPhone_number(e.target.value)} /> <br />
        <Input type="checkbox" value={roolsOk} name={roolsOk} onChange={e => setRoolsOk(e.target.value)} />
        {/* איך עושים שרק כשלוחץ על checkbox מאפשר submit */}
        <button type="submit"> sign in </button>
    
      <Link to={"/homeinner"}></Link>
      <Outlet/>

    </form>
} 


