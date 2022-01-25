import React, { useState, useEffect } from "react";

import getCoursesByUserId from "services/getCoursesByUserId";

import CourseListSection from "components/CoursesSection";
import CoursesHeader from "components/CoursesHeader";

// import placeholder from "assets/placeholder.png"


// const MY_COURSES = [
//   {
//     id: 0,
//     title: "Curso de ingles",
//     author: "ispeak",
//     duration: "1h 13m",
//     students: "39416",
//     thumbnail: `${placeholder}`,
//   },
// ]

export default function CoursesPage () {
  const [myCourses, setMyCourses] = useState([])

  useEffect(() => {
    getCoursesByUserId().then(courses => setMyCourses(courses))
  }, [])

  return <>
    <section className="flex flex-col gap-5 py-5 px-10 w-ful">
      <CoursesHeader coursesNum={myCourses.length}/>
      <CourseListSection courses={myCourses}/>
    </section>
  </>
}