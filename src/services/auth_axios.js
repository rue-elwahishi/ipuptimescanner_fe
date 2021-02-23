import instance from './axios_instance'

export default async function loginUser(credentials){
  
  const userData = await JSON.stringify(credentials)
  return instance.post('/users/login', userData,{ headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json'
  }}).then(data => data)
}
