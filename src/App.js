import React from "react";
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
  return (
    <div className="App flex">
      <SideBar />
      <main className="w-full pl-60">
        <Header />
        <Route component={LoginPage} path="/login" />
        <Route component={DashboardPage} path="/" />
        <Route component={CoursesPage} path="/courses" />
        <Route component={CoursePage} path="/courses/:courseId" />
        <Route component={MaterialPage} path="/courses/:courseId/:classId" />
      </main>
    </div>
  );
}

export default App;
