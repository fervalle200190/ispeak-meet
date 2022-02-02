import React, { useEffect, useState } from "react";
import { Route } from "wouter";

import LoginPage from "pages/Login";
import DashboardPage from './pages/Dashboard';
import CoursesPage from './pages/Courses';
import CoursePage from "./pages/Course";
import MaterialPage from "./pages/Material"; 

import SideBar from "./components/SideBar";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
  const loggedUserJson = localStorage.getItem('loggedAppUser')
  if(loggedUserJson) {
    const user = JSON.parse(loggedUserJson)
    setUser(user)
  }
  }, [])

  return (
    <>
      { 
      !user
      ? <Route component={LoginPage} path="/" />
      : <div className="App flex">
        {/* <SideBar /> */}
        <main className="w-full">
          <Header user={user} />
          <Route component={DashboardPage} path="/" />
          <Route component={CoursesPage} path="/courses" />
          <Route component={CoursePage} path="/courses/:courseId" />
          <Route component={MaterialPage} path="/courses/:courseId/:moduleId/:materialId" />
        </main>
      </div>
      }
    </>
  );
}

export default App;
