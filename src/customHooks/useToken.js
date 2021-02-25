import { useState } from 'react';
import React from 'react';

export const useToken = () => {
  
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  React.useEffect(() => {
    console.log("useToken check token: ", token);
  }, token)

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };
  
  return {
    setToken: saveToken,
    token
  }
}

