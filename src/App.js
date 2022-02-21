import React, { useEffect, useState } from "react";
import { Route } from "wouter";

import LoginPage from "pages/Login";
import DashboardPage from "./pages/Dashboard";
import CoursesPage from "./pages/Courses";
import CoursePage from "./pages/Course";
import MaterialPage from "./pages/Material";
import AdditionalMaterialPage from "./pages/AdditionalMaterial";
import ProfilePage from "pages/Profile";

import SideBar from "./components/SideBar";
import Header from "./components/Header";

import "./App.css";
import { SideBarContext } from "context/sideBarContext";

const RenderProfessorView = (user) => {
  console.log(user.user);
  return (
    <div className="App flex flex-col items-center md:ml-60">
      <SideBar />
      <Header user={user} />
      <main className="w-full ">
        <Route component={DashboardPage} path="/" />
      </main>
    </div>
  );
};

const RenderStudentView = (user) => {
  console.log(user.user);
  return (
    <div className="App flex flex-col items-center md:ml-60">
      <SideBar />
      <Header user={user} />
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
