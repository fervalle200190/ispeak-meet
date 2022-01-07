import React from "react";
import CourseListSection from "../../components/CourseListSection";
import CoursesHeader from "../../components/CoursesHeader";

import placeholder from "../../assets/placeholder.png"


const MY_COURSES = [
  {
    id: 0,
    title: "Curso de ingles",
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
  {
    id: 4,
    title: "Illustrator: from beginner to expert",
    author: "ispeak",
    duration: "10h 11m",
    students: "5365",
    thumbnail: `${placeholder}`,
  },
];

export default function CoursesPage () {
  return <>
    <section className="flex flex-col gap-5 py-5 px-10 w-ful">
      <CoursesHeader />
      <CourseListSection title='' courses={MY_COURSES}/>
    </section>
  </>
}