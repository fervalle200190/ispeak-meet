import { useState, useEffect } from "react";
import getAllCoursesByUser from "services/getAllCoursesByUser";
import DashboardIcons from "components/DashboardIcons";

const getContinueWatching = (courses) => {
  for (let course of courses) {
    for (let module of course.modulos) {
      for (let material of module.clases) {
        if (!material.completada) return material;
      }
    }
  }
};

export default function DashboardResume() {
  const user = JSON.parse(window.localStorage.getItem("loggedAppUser"));
  const [resume, setResume] = useState({});

  useEffect(() => {
    getAllCoursesByUser(user.id).then((response) => {
      setResume(getContinueWatching(response));
    });
  }, [user.id]);

  return (
    <div className="flex max-h-fit min-h-[20px] w-full flex-col gap-5 overflow-hidden rounded-xl bg-primary text-gray-50 shadow-sm">
      <div className="w-full">
        <div className="relative w-full">
          <div className="absolute left-0 top-0 z-10 h-full w-full rounded-bl-[2rem] bg-black opacity-30"></div>
          <span className="absolute left-2 top-2 z-10 text-xl font-semibold">
            {resume.nombre}
          </span>
          <button className="absolute top-1/2 left-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-white">
            <DashboardIcons name="play" />
          </button>
          <img
            src={resume.thumbnails}
            alt=""
            className="h-full w-full rounded-bl-[2rem]"
          />
        </div>
        <div className="flex w-full justify-end p-5">
          <button className="> rounded-xl bg-accent py-2 px-5 font-medium text-primary">
            Continue your recent courses{" >"}
          </button>
        </div>
      </div>
    </div>
  );
}
