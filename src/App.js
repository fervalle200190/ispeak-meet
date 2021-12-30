import React from "react";
import { Route, Switch } from "wouter";

import DashboardPage from './pages/Dashboard';
import CoursesPage from './pages/Courses';

import AsideNav from './components/AsideNav';
import Header from "./components/Header.js";

import "./App.css";

function App() {
  return (
    <div className="App flex">
      <AsideNav />
      <main className="w-full pl-60">
        <Header />
        <Switch>
          <Route component={DashboardPage} path="/" />
          <Route component={CoursesPage} path="/courses" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
