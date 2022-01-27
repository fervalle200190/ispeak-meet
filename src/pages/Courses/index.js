import React, { useState, useEffect } from "react";

import getCoursesByUserId from "services/getCoursesByUserId";

import CourseListSection from "components/CoursesSection";
import CoursesHeader from "components/CoursesHeader";

export default function CoursesPage () {
  const [myCourses, setMyCourses] = useState([])

  useEffect(() => {
    getCoursesByUserId().then(courses => setMyCourses(courses))
  }, [])

  return <>
    <section className="flex flex-col gap-5 py-5 px-10 w-full">
      <CoursesHeader coursesNum={myCourses.length}/>
      <CourseListSection courses={myCourses}/>
    </section>
  </>
}