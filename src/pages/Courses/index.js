import React from "react";
import CourseListSection from "components/CoursesSection";
import CoursesHeader from "components/CoursesHeader";

import placeholder from "assets/placeholder.png"


const MY_COURSES = [
  {
    id: 0,
    title: "Curso de ingles",
    author: "ispeak",
    duration: "1h 13m",
    students: "39416",
    thumbnail: `${placeholder}`,
  },
]

export default function CoursesPage () {

  return <>
    <section className="flex flex-col gap-5 py-5 px-10 w-ful">
      <CoursesHeader />
      <CourseListSection/>
    </section>
  </>
}