import React from 'react'
import loginUser from '../../services/auth_axios'
import LoginForm from '../../components/loginForm/login_form.component'
import { useHistory } from 'react-router-dom'
export default function LoginView({setToken}) {

 const history = useHistory();

  async function handleSubmit (e, data)  {

    e.preventDefault()
    const token = await loginUser(data)
    setToken(token.data.token) 
    history.push('/')


    }
  return (
    <div>
       <LoginForm  handleSubmit={handleSubmit}/>
    </div>
  )
}
