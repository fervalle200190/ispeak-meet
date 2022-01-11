import { API_URL, USER_ID } from "./settings"

export default function getCoursesById() {
    const URL = `${API_URL}/Cursos/GetAllByAlumno/${USER_ID}`

    return fetch(URL)
        .then(response => response.json())
        .then(response => {
            const data = response
            const courses = data.map(course => {
                const id = course.id
                const title = course.nombre
                const students = course.cantidadAlumnos
                const duration = course.duracion
                const professor = course.profesor
                return {id, title, students, duration, professor}
            })
            console.log(data)
            console.log(courses)
            return courses
        })
}