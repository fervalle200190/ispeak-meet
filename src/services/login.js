import { API_URL } from "./settings";

export default function login({email, password}) {
  const URL = `${API_URL}/User/Login`

  const credentials = {
    'email': email,
    'password': password
  }

  return fetch(URL, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(credentials)})
    .then(response => {
      if(response.status === 400) return false
      return response.json()})
    .then(response => {
      if(response === false) return false 
      const data = response
      window.localStorage.setItem('loggedAppUser', JSON.stringify(data))
      return data
    })
}