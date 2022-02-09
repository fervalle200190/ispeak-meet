import React, { useState, useEffect } from "react";

import getCoursesByUserId from "services/getCoursesByUserId";

import CourseListSection from "components/CoursesSection";
import CoursesHeader from "components/CoursesHeader";

export default function CoursesPage() {
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    getCoursesByUserId().then((courses) => setMyCourses(courses));
  }, []);

  return (
    <>
      <section className="flex w-full flex-col gap-5 p-5 md:p-10">
        <CoursesHeader coursesNum={myCourses.length} />
        <CourseListSection courses={myCourses} />
      </section>
    </>
  );
}
