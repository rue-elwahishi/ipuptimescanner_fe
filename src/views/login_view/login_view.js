import React from 'react'
import loginUser from '../../services/auth_axios'
import LoginForm from '../../components/loginForm/login_form.component'
export default function LoginView({setToken}) {



  async function handleSubmit (e, data)  {

    e.preventDefault()
    const token = await loginUser(data)
    setToken(token)
    }
  return (
    <div>
       <LoginForm  handleSubmit={handleSubmit}/>
    </div>
  )
}
