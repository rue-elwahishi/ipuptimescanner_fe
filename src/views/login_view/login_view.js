import React from 'react'
import {PostClientEndpoint} from '../../customHooks/postClientEndpoint'
import LoginForm from '../../components/loginForm/login_form.component'

export default function LoginView(props) {

  
 

  const handleSubmit = async (e, data) => {

    e.preventDefault()
    
    
   
  }
  return (
    <div>
       <LoginForm  handleSubmit={handleSubmit}/>
    </div>
  )
}
