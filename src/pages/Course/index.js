import React, { useState, useEffect } from "react";
import { Link } from "wouter";

import getCourseById from "services/getCourseById";

import "./styles.css";
import CourseIcons from "components/CourseIcons";

function AccordionItem({ course, module }) {
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
        <h2 className="text-lg font-semibold font-Barlow text-primary mr-5 text-center accordion-title">
          {module.nombre}
        </h2>
        {isActive ? <CourseIcons name="minus" /> : <CourseIcons name="plus" />}
      </div>
      {isActive && (
        <ol className="accordion-content">
          {module.clases.map((clase) => (
            <li key={clase.id}>
              <Link
                className="flex flex-col items-center content-center"
                href={`/courses/${course}/${clase.id}`}
              >
                <h3 className="text-md font-Barlow text-primary mr-5 text-center">
                  {clase.nombre}
                </h3>
                <img
                  src={clase.thumbnails}
                  alt={clase.nombre}
                  className=" aspect-video max-h-96"
                />
              </Link>
            </li>
          ))}
        </ol>
      )}
    </li>
  );
}

function Module({ course, modules = [] }) {
  return modules.map((module) => (
    <AccordionItem course={course} module={module} />
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
