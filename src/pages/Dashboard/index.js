import React, { useState, useEffect } from "react";

import DashboardSection from "components/DashboardSection";
import CourseListSection from "components/CoursesSection";

import getCoursesByUserId from "services/getCoursesByUserId";
import getCoursesByProfessor from "services/getCoursesByProfessorId";

// import placeholder from "assets/placeholder.png"

const RenderProfessor = () => {
  useEffect(() => {
    getCoursesByProfessor();
  }, []);
  const user = JSON.parse(localStorage.getItem("loggedAppUser"));
  const username = user.nombre.split(" ").slice(0, 1);
  return (
    <div className="flex w-full flex-col gap-5 p-5">
      <div>
        <div className="flex w-full flex-col rounded-xl bg-primary p-5">
          <span className="text-xl font-semibold text-white">
            Welcome back, {username}
            <span className="text-accent">.</span>
          </span>
          <button className="w-40 rounded-md bg-accent p-1 text-sm font-semibold text-primary">
            Create your course
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex h-24 flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <span className="text-xl font-semibold text-primary">
            Active students<span className="text-accent">.</span>
          </span>
          <span className="w-full text-right text-2xl text-primary">120</span>
        </div>
        <div className="flex h-24 flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <span className="text-xl font-semibold text-primary">
            Courses in progress<span className="text-accent">.</span>
          </span>
          <span className="w-full text-right text-2xl text-primary">20</span>
        </div>
      </div>
      <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <span className="text-xl font-semibold text-primary">
          My Students<span className="text-accent">.</span>
        </span>
      </div>
      <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <span className="text-xl font-semibold text-primary">
          My Courses<span className="text-accent">.</span>
        </span>
      </div>
    </div>
  );
};

const RenderStudent = ({ courses }) => {
  return (
    <div className="max-w-7xl">
      <DashboardSection />
      <CourseListSection
        title="Your Courses."
        courses={courses}
        link="/courses"
      />
    </div>
  );
};

export default function DashboardPage() {
  const userInfo = JSON.parse(localStorage.getItem("loggedAppUser"));
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    getCoursesByUserId().then((courses) => setMyCourses(courses));
  }, []);

  return userInfo.rol === "Profesor" ? (
    <RenderProfessor />
  ) : (
    <RenderStudent courses={myCourses} />
  );
}
