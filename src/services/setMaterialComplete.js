import { API_URL } from "./settings"

export default function setMaterialComplete({id, clase, alumnoId}) {
  const URL = `${API_URL}/MaterialEstudios/SetMaterialCompletado/${id}/${clase}/${alumnoId}")`

  fetch(URL)
}