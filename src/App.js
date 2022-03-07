import React, { useEffect, useState } from "react";
import { Route } from "wouter";

import LoginPage from "pages/Login";
import DashboardPage from "./pages/Dashboard";
import CoursesPage from "./pages/Courses";
import CoursePage from "./pages/Course";
import MaterialPage from "./pages/Material";
import AdditionalMaterialPage from "./pages/AdditionalMaterial";
import ProfilePage from "pages/Profile";
import StudentsPage from "pages/Students";
import ProfessorCoursesPage from "pages/ProfessorCourses";
import AssistancePage from "pages/Assistance";
import FollowUpPage from "pages/FollowUp";
import ProgressPage from "pages/Progress";

import SideBar from "./components/SideBar";
import Header from "./components/Header";

import "./App.css";
import { SideBarContext } from "context/sideBarContext";
import { CoursesContext } from "context/coursesContext";
import getAllCoursesByUser from "services/getAllCoursesByUser";

const RenderProfessorView = () => {
  const user = JSON.parse(window.localStorage.getItem("loggedAppUser"));
  return (
    <div className="App flex flex-col items-center md:ml-60">
      <SideBar />
      <Header user={user} />
      <main className="w-full ">
        <Route component={DashboardPage} path="/" />
        <Route component={StudentsPage} path="/students" />
        <Route component={ProfessorCoursesPage} path="/courses" />
        <Route component={AssistancePage} path="/assistance" />
        <Route component={FollowUpPage} path="/followup" />
        <Route component={ProgressPage} path="/progress" />
      </main>
    </div>
  );
};

const RenderStudentView = () => {
  const USER = JSON.parse(window.localStorage.getItem("loggedAppUser"));
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCoursesByUser(USER.id).then((response) => setCourses(response));
  }, [USER.id]);

  return (
    <>
      <CoursesContext.Provider value={courses}>
        <div className="App flex flex-col items-center md:ml-60">
          <SideBar />
          <Header user={USER} />
          <main className="w-full">
            <Route component={DashboardPage} path="/" />
            <Route component={CoursesPage} path="/courses" />
            <Route component={CoursePage} path="/courses/:courseId" />
            <Route
              component={MaterialPage}
              path="/courses/:courseId/module/:moduleId/material/:materialId"
            />
            <Route component={AdditionalMaterialPage} path="/refuerzo" />
            <Route component={ProfilePage} path="/profile" />
          </main>
        </div>
      </CoursesContext.Provider>
    </>
  );
};

function App() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loggedUserJson = localStorage.getItem("loggedAppUser");
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson);
      setUser(user);
    }
  }, []);

  return (
    <>
      {!user ? (
        <Route component={LoginPage} path="/" />
      ) : (
        <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
          {user.rol === "Profesor" ? (
            <RenderProfessorView />
          ) : (
            <RenderStudentView />
          )}
        </SideBarContext.Provider>
      )}
    </>
  );
}

export default App;
