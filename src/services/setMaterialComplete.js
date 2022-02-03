import { API_URL } from "./settings"

export default function setMaterialComplete({moduleId, materialId}) {
  const USER_ID = JSON.parse(localStorage.getItem('loggedAppUser')).id
  const URL = `${API_URL}/MaterialEstudios/SetMaterialCompletado/${moduleId}/${materialId}/${USER_ID}")`

  fetch(URL).then(response => response.json()).then(response => console.log())
}