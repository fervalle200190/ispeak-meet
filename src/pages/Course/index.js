import React, { useState, useEffect } from "react";
import getCourseById from "services/getCourseById";
// import { Link } from "wouter";
// import ReactPlayer from 'react-player/youtube'

import "./styles.css";
// import CourseNav from "../../components/CourseNav";

// const COURSE = {
//   name: "Business Email Writing",
//   units: [
//     {
//       id: 0,
//       name: "Introduction and Presentation",
//       isCompleted: false,
//       classes: [
//         {
//           id: 0,
//           name: "Welcome to business email writing",
//           video: { url: "", duration: "01:10" },
//           content: "",
//           goals: "",
//           isCompleted: false,
//         },
//       ],
//     },
//     {
//       id: 1,
//       name: "Type of emails",
//       isCompleted: false,
//       classes: [
//         {
//           id: 0,
//           name: "The Three Types of Emails",
//           video: { url: "", duration: "02:20" },
//           content: "",
//           goals: "",
//           isCompleted: true,
//         },
//         {
//           id: 1,
//           name: "Formal Emails",
//           video: { url: "", duration: "03:10" },
//           content: "",
//           goals: "",
//           isCompleted: true,
//         },
//         {
//           id: 2,
//           name: "Memo Emails",
//           video: { url: "", duration: "02:45" },
//           content: "",
//           goals: "",
//           isCompleted: false,
//         },
//         {
//           id: 3,
//           name: "Technical Emails",
//           video: { url: "", duration: "03:01" },
//           content: "",
//           goals: "",
//           isCompleted: false,
//         },
//       ],
//     },
//   ],
// };

function Module({ modules = [] }) {
  return modules.map((module) => (
    <li className="bg-white p-5 rounded-xl shadow-md">
      <div>
        <h2 className="text-lg font-semibold font-Barlow text-primary mr-5 text-center">
          {module.nombre}
        </h2>
        <ol className="">
          {module.clases.map((clase) => (
            <li>
              <div className="flex flex-col items-center content-center">
                <h3 className="text-md font-Barlow text-primary mr-5 text-center">{clase.nombre}</h3>
                <img src={clase.thumbnails} alt={clase.nombre} className=" aspect-video max-h-96" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </li>
  ));
}

export default function CoursePage({ params }) {
  const id = parseInt(params.id);
  const [course, setCourse] = useState({});
  useEffect(() => {
    getCourseById({ id: id }).then((course) => setCourse(course));
  }, [id]);

  return (
    <section className="p-5">
      <h1 className="text-2xl font-semibold font-Barlow text-primary mr-5">
        {course.nombre}
      </h1>
      <ol className="p-5 flex flex-col gap-2">
        {<Module modules={course.modulos} />}
      </ol>
    </section>
  );

  // return (
  //   <section className="bg-primary flex gap-1 pt-5 px-5 w-ful text-white">
  //     <div className="w-1/4">
  //     <header className="pl-5 h-20">
  //     <div>
  //         <Link href="/courses">{`<`} My classes</Link>
  //       </div>
  //       <h2 className="font-medium text-lg">Bussiness Email Writing</h2>
  //     </header>
  //       {/* <CourseNav course={COURSE} /> */}
  //     </div>
  //     <div className="w-3/4 px-10 py-5">
  //       <ReactPlayer url="https://www.youtube.com/watch?v=2VblqgJT2k8" height="100%" width="100%"/>
  //     </div>
  //   </section>
  // );
}
