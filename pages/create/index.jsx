import React, { useState } from 'react';
import Cookies from 'js-cookie'
import Router from 'next/router';
import api from '../../services/api'
import './Create.scss'

const Singup = (props) => {
    const [email, setemail] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [messageCreate, setmessageCreate] = useState('')

    let singup = (event) => {
        event.preventDefault()
        api.post('/user', {
            email: email,
            username: username,
            password: password,
        }).then((data) => {
            if (data.data.message) {
                setmessageCreate(data.data.message)
                if (data.data.token) {
                    Cookies.set('login', data.data.token)
                    Cookies.set('username', data.data.username)
                    Router.push('/diagrams')
                }
            }
        })
    }
    let emailChange = (event) => {
        setemail(event.target.value)
    }
    let passChange = (event) => {
        setpassword(event.target.value)
    }
    let usernameChange = (event) => {
        setusername(event.target.value)
    }

    return (
        <div id="create">
            <form onSubmit={singup} accept-charset="utf-8">
                <label className="center">{messageCreate}</label>
                <h2>Criar Conta</h2>
                <label>Email</label>
                <input name="email" type="email" value={email} onChange={emailChange} required placeholder="Insira o email" />
                <label> Username </label>
                <input name="name" type="text" value={username} onChange={usernameChange} required placeholder="Insira o username" />
                <label> Password</label>
                <input name="password" type="password" value={password} onChange={passChange} required placeholder="Insira a senha" />
                <button className="btn" type="submit">Criar Conta</button>
            </form>
        </div>
    );

}
export default Singup;