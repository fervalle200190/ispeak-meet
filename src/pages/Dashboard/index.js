import React, { useState, useEffect } from "react";

import DashboardSection from "components/DashboardSection";
import CourseListSection from "components/CoursesSection";

import getCoursesByUserId from "services/getCoursesByUserId";
import getAllCourses from "services/getAllCourses";

// import placeholder from "assets/placeholder.png"

export default function DashboardPage() {
  const [myCourses, setMyCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    getCoursesByUserId().then((courses) => setMyCourses(courses));
    getAllCourses().then((courses) => setAllCourses(courses));
  }, []);

  return (
    <>
      <div className="max-w-7xl">
        <DashboardSection />
        <CourseListSection
          title="Your Courses."
          courses={myCourses}
          link="/courses"
        />
        <CourseListSection
          title="Recommended Courses."
          courses={allCourses}
          link="/"
        />
      </div>
    </>
  );
}
