import React from "react";
import { Link } from "wouter";

export default function ListCard({id = 0, title, author, duration, students, thumbnail, url = ''}) {
  return (
    <Link href={`/courses/${title}`} className="transition ease-in-out delay-[50ms] flex flex-col w-64 bg-white shadow-md rounded-xl hover:shadow-xl hover:scale-[1.01]">
        <div>
          <img src={thumbnail} alt="" className="rounded-3xl object-cover" />
        </div>
        <div className="pb-2 px-3">
          <small className="text-xs text-gray-400">{students} students</small>
          <h3 className="font-Barlow font-bold text-primary mb-1 line-clamp-2">
            {title}
          </h3>
          <small className="text-xs text-gray-300">Author</small>
          <div className="flex justify-between text-primary text-xs">
            <span>{author}</span>
            <span>{duration}</span>
          </div>
        </div>
    </Link>
  );
}
