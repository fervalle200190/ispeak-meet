import { API_URL } from "./settings";

export default function login({email, password}) {
  const URL = `${API_URL}/User/Login`

  const credentials = {
    'email': email,
    'password': password
  }

  return fetch(URL, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(credentials)})
    .then(response => response.json())
    .then(response => { 
      const data = response
      console.log(data)
      if(Object.keys(data).filter(key => key === 'token')) {
        console.log(true)
        window.localStorage.setItem('loggedAppUser', JSON.stringify(data))
        return data
      }

      return data
    })
}