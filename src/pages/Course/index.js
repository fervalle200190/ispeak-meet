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
      className="accordion-item rounded-xl bg-primary p-5 text-gray-50 shadow-md transition-all duration-300 ease-in-out"
    >
      <div
        className="flex w-full items-center justify-between"
        onClick={() => setActive(!isActive)}
      >
        <div className="flex items-center">
          <h2 className="accordion-title mr-5 text-center font-Barlow text-lg font-semibold text-gray-50">
            {module.nombre}
          </h2>
          <span>({index + 1})</span>
        </div>

        {isActive ? <CourseIcons name="minus" /> : <CourseIcons name="plus" />}
      </div>
      <ol
        className={`accordion-content  overflow-hidden ${
          isActive ? "max-h-auto mt-10" : " m-0 max-h-0 opacity-0"
        } transition-all duration-500 ease-in-out`}
      >
        {module.clases.map((clase, index) => (
          <li key={clase.id} className="border-t border-slate-900">
            <Link
              className="flex flex-col content-center items-center gap-5 p-5 md:flex-row"
              href={`/courses/${course}/${module.id}/${clase.id}`}
            >
              <img
                src={clase.thumbnails}
                alt={clase.nombre}
                className="aspect-video max-h-40 rounded-3xl"
              />
              <div className="flex flex-col">
                <h3 className="text-md mr-5 font-Barlow font-semibold text-gray-50">
                  {index + 1}. {clase.nombre}
                </h3>
                {clase.completada ? (
                  <div>
                    <div className="mt-2 flex h-8 max-w-[8.5rem] items-center justify-center rounded-full bg-accent p-5">
                      <span className="mr-1 text-primary">Complete</span>
                      <CourseIcons name="check" />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </li>
  );
}

function Module({ course, modules = [] }) {
  return modules.map((module, index) => (
    <AccordionItem
      key={module.id}
      course={course}
      module={module}
      index={index}
    />
  ));
}

export default function CoursePage({ params }) {
  const id = params.courseId;
  const [course, setCourse] = useState({});

  useEffect(() => {
    getCourseById({ id }).then((course) => setCourse(course));
  }, [id]);

  return (
    <section className="p-5 md:p-10">
      <h1 className="mr-5 font-Barlow text-2xl font-semibold text-primary">
        {course.nombre}
      </h1>
      <ol className="accordion flex flex-col gap-2 p-5">
        {<Module course={course.id} modules={course.modulos} />}
      </ol>
    </section>
  );
}
