import "./App.css";
import { AsideNav } from "./components/aside/AsideNav";
import CourseListSection from "./components/CourseListSection";
import { Header } from "./components/Header.js";
import placeholder from "./assets/placeholder.png";
import DashboardSection from "./components/DashboardSection";

const MY_COURSES = [
  {
    id: 0,
    title: "Adobe After Effects: How to start",
    author: "ispeak",
    duration: "1h 13m",
    students: "39416",
    thumbnail: `${placeholder}`,
  },
  {
    id: 1,
    title: "Communication Skill: Become more clear & confident",
    author: "ispeak",
    duration: "1h 25m",
    students: "15236",
    thumbnail: `${placeholder}`,
  },
  {
    id: 2,
    title: "Photoshop: from beginner to expert",
    author: "ispeak",
    duration: "4h 30m",
    students: "20221",
    thumbnail: `${placeholder}`,
  },
  {
    id: 3,
    title: "Illustrator: from beginner to expert",
    author: "ispeak",
    duration: "10h 11m",
    students: "5365",
    thumbnail: `${placeholder}`,
  },
];

function App() {
  return (
    <div className="App flex">
      <AsideNav />
      <main className="w-full pl-60">
        <Header />
        <div className="max-w-7xl">
          <DashboardSection />
          <CourseListSection title="Your Courses." courses={MY_COURSES} />
          <CourseListSection title="Recommended Courses." courses={MY_COURSES} />
        </div>
      </main>
    </div>
  );
}

export default App;
