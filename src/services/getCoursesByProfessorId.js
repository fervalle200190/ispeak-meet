import { API_URL } from "./settings";

export default function getCoursesByProfessor() {
  const id = JSON.parse(localStorage.getItem("loggedAppUser")).id;
  const URL = `${API_URL}/Cursos/GetAllByProfesor/2006`;

  return fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      const data = response;
      return data;
    });
}
