import React from "react";
import { Link } from "wouter";

import CoursesList from "components/CoursesList";

export default function CourseListSection({title, courses, link}) {

  return (
    <section className="flex flex-col gap-5 py-5 px-10 w-full">
      {
        title ? <div className="flex gap-5 items-center">
          <h2 className="text-2xl font-semibold font-Barlow text-primary mr-5">
            {title}
          </h2>
          <Link
            href={link}
            className="py-1 px-2 text-sm text-primary bg-accent rounded-xl font-medium"
          >
            Browse All
          </Link>
        </div> :
        <></>
      }
      <CoursesList courses={courses}/>
    </section>
  );
}
