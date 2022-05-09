import React, { useState } from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export const Login = () => {

    const [password, setPassword] = useState('');
    const [email, setEmailUser] = useState('');
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();

        loginFunc(email, password);
        setPassword('');
        setEmailUser('');
    }

    const loginFunc = (email, password) => {

        console.log("i am in log in")
        try {
            console.log("i am in login--try")
            axios.post("http://localhost:5000/users/getByEmailPassword", {
                email,
                password,

            }).then((res) => {
                if (res.data) {
                    console.log('user exists');
                    navigate('../homeinner')
                }
            });
        } catch (error) {
            console.error('error to sign in', error);
            alert('error');
        }
    }


    const getfunc = (e) => {
        e.preventDefault();
        console.log('hi I am in getFunc');
        axios.get("http://localhost:5000/users")
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error);
            })

    }

    return <form onSubmit={login}>
        <button onClick={getfunc}>get</button><br/>
        <Input type="email" placeholder="email" value={email} name={email} onChange={e => setEmailUser(e.target.value)} /> <br />
        <Input type="password" placeholder="password" value={password} name={password} onChange={e => setPassword(e.target.value)} /> <br />
        <button type="submit"> log in </button>
    </form>
}


