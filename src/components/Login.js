import React, { useState } from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [phone_number, setPhone_number] = useState('');

    const signin = (e) => {
        e.preventDefault();
        login(username, emailUser ,password , phone_number);
        setUsername('');
        setPassword('');
        setEmailUser('');
        setPhone_number('');
    }

    const login = (emailUser ,password ) => {
        console.log("shcgkjh")
        try {
            console.log("shcgkjhtry")
            const { data: user } = axios.get("http://localhost:5000/users/getByEmailPassword", {
                password,
                emailUser
            })
            if (user?.name) {
                console.log('user exists');
            }
        } catch (error) {
            //console.error('error to sign in', error);
            alert('error');
        }
    }

    const getfunc=()=>{
        axios.get("http://localhost:5000/users")
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return <form onSubmit={signin}>
        <button onClick={getfunc}>get</button>
        <Input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} prefix={<UserOutlined />} /> <br />
        <Input type="email" placeholder="email" value={emailUser} onChange={e => setEmailUser(e.target.value)} /> <br />
        <Input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <Input type="text" placeholder="phone-number" value={phone_number} onChange={e => setPhone_number(e.target.value)} /> <br />
        <button type="submit"> sign in </button>
    </form>
}


