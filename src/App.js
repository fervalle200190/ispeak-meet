import React from "react";
import { Route } from "wouter";

import DashboardPage from './pages/Dashboard';
import CoursesPage from './pages/Courses';
import CoursePage from "./pages/Course";
import ClassPage from "./pages/Class"; 

import SideBar from "./components/SideBar";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App flex">
      <SideBar />
      <main className="w-full pl-60">
        <Header />
        <Route component={DashboardPage} path="/" />
        <Route component={CoursesPage} path="/courses" />
        <Route component={CoursePage} path="/courses/:courseId" />
        <Route component={ClassPage} path="/courses/:courseId/:classId" />
      </main>
    </div>
  );
}

export default App;
