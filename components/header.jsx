import React, { useState } from 'react'
import api from '../services/api'
import * as yup from 'yup'; // for everything

let loginSchema = yup.object().shape({
  email: yup.string().email().required('email is required'),
  password: yup.string().required('password is required')
})

// check validity


export default function Header() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  let submit = () => {
    loginSchema
      .validate({
        email,
        password
      }, {
        abortEarly: false
      })
      .then(function (valid) {
        setErrors([]); // => true
        api.post('/users/login',{
          email,
          password
        })
      }).catch(e => {
        if (e.inner)
          setErrors(e.inner.map(e => ({ 'field': e.path, 'message': e.message })
          ))
      })
  }

  return (

    <div id="header">
      <img width='80' src='/favicon.svg'></img>
      <div className="login-container">
        <div>
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.filter(e => e.field == 'email').length > 0 ? < div className="error" > {errors.filter(e => e.field == 'email')[0].message}</div> : ''}
        </div>
        <div>
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.filter(e => e.field == 'password').length > 0 ? < div className="error" > {errors.filter(e => e.field == 'password')[0].message}</div> : ''}
        </div>
        <button onClick={() => submit()} id="login-button">login</button>
      </div>
      <style jsx>{`
        #header {
          padding: 0 0.5rem;
          display: flex;
          min-width: 100vw;
          height: 70px;
          flex-direction: row;
          justify-content: space-between;
          border-bottom:1px solid #13aa52;
        }
        .login-container{
          display:flex;
          justify-content:flex-end;
          align-items:center;
        }
        .login-container input{
          outline:none;
          height:25px; 
        border:none;
        background-color:#f2f2f2;
        margin-right:15px;
        padding:5px;
        color: #7d7d7d;
        }
        #login-button{
          height:25px;
          margin:10px 0;
          outline:none;
          border:none;
          background-color: #13aa52;
          color:#fff;
          border-radius: 5px;
          padding:0 15px;
          cursor:pointer;
        margin-right:15px        }
        .error{
          padding-left:5px;
          color:red;
          font-size:12px;
          position:absolute;
        }
      `}</style>
    </div >
  )
}
