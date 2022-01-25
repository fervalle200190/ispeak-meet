import { API_URL, USER_ID } from "./settings"

export default function getCourseById({id}) {
    const URL = `${API_URL}/Cursos/GetAllByAlumno/${USER_ID}`

    return fetch(URL)
        .then(response => response.json())
        .then(response => {
            const data = response
            const course = data.filter(course => course.id === id)
            return course
        })
}