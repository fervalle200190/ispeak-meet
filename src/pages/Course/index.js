import React, { useState, useEffect } from "react";
import { Link } from "wouter";

import getCourseById from "services/getCourseById";

import "./styles.css";
import CourseIcons from "components/CourseIcons";

function AccordionItem({ course, module, index }) {
  const [isActive, setActive] = useState(false);

  return (
    <li
      key={module.id}
      className="bg-white p-5 rounded-xl shadow-md accordion-item"
    >
      <div
        className="flex justify-between items-center w-full"
        onClick={() => setActive(!isActive)}
      >
      <div className="flex items-center">
        <h2 className="text-lg font-semibold font-Barlow text-primary mr-5 text-center accordion-title">
          {module.nombre}
        </h2>
        <span>({index+1})</span>
      </div>
        
        {isActive ? <CourseIcons name="minus" /> : <CourseIcons name="plus" />}
      </div>
      {isActive && (
        <ol className="accordion-content mt-10">
          {module.clases.map((clase, index) => (
            <li key={clase.id} className="border-t-[1px] border-gray-200">
              <Link
                className="flex items-center content-center p-5 gap-5"
                href={`/courses/${course}/${module.id}/${clase.id}`}
              >
                <img
                  src={clase.thumbnails}
                  alt={clase.nombre}
                  className="aspect-video max-h-40 rounded-3xl border-[1px] border-accent"
                />
                <div className="flex flex-col">
                  <h3 className="text-md font-semibold font-Barlow text-primary mr-5">
                    {index+1}. {clase.nombre}
                  </h3>
                  { 
                  clase.completada ?
                    <span className="text-accent">Complete</span>
                  :
                    <></>
                  }
                </div>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </li>
  );
}

function Module({ course, modules = [] }) {
  return modules.map((module, index) => (
    <AccordionItem key={module.id} course={course} module={module} index={index} />
  ));
}

export default function CoursePage({ params }) {
  const id = params.courseId;
  const [course, setCourse] = useState({});

  useEffect(() => {
    getCourseById({ id }).then((course) => setCourse(course));
  }, [id]);

  return (
    <section className="p-5">
      <h1 className="text-2xl font-semibold font-Barlow text-primary mr-5">
        {course.nombre}
      </h1>
      <ol className="p-5 flex flex-col gap-2 accordion">
        {<Module course={course.id} modules={course.modulos} />}
      </ol>
    </section>
  );
}
