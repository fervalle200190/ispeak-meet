import { useEffect, useState } from "react";
import getAllCoursesByUser from "services/getAllCoursesByUser";

export default function DashboardInfo() {
  const [courses, setCourses] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("loggedAppUser"));
  const username = user.nombre.split(" ").slice(0, 1);

  useEffect(() => {
    getAllCoursesByUser(user.id).then((response) => setCourses(response));
  }, [user.id]);

  return (
    <div className="flex w-full flex-col rounded-xl bg-primary p-5 text-gray-50">
      <span className="text-center text-xl font-semibold ">
        Hey, {username}
        <span className="text-accent">.</span>
      </span>
      <span className="text-center text-sm">
        Welcome back, nice to see you again!
      </span>
      <div className=""></div>
    </div>

    // <div className="flex h-[26rem] w-[26rem] flex-col items-center gap-2 rounded-3xl bg-primary py-5">
    //   <img
    //     src={avatar}
    //     alt=""
    //     className="h-40 w-40 rounded-full border-4 border-white"
    //   />
    //   <span className="text-xl font-semibold tracking-wide text-white">
    //     Hey, {username}.
    //   </span>
    //   <small className="text-white">Welcome back, nice to see you again!</small>
    //   <div className="grid grid-cols-2 gap-3">
    //     <div className="flex h-20 w-36 flex-col justify-center rounded-xl bg-gray-100 py-2 px-3 text-primary">
    //       <span className="w-fit rounded-full bg-accent py-1 px-2 font-bold">
    //         {completed}
    //       </span>
    //       <span className="text-sm font-semibold">Completed</span>
    //     </div>
    //     <div className="flex h-20 w-36 flex-col justify-center rounded-xl bg-gray-100 py-2 px-3 text-primary">
    //       <span className="w-fit rounded-full bg-accent py-1 px-2 font-bold">
    //         {inProgress}
    //       </span>
    //       <span className="text-sm font-semibold">In Progress</span>
    //     </div>
    //     <div className="flex h-20 w-36 flex-col justify-center rounded-xl bg-gray-100 py-2 px-3 text-primary">
    //       <span className="w-fit rounded-full bg-accent py-1 px-2 font-bold">
    //         {certificates}
    //       </span>
    //       <span className="text-sm font-semibold">Certificates</span>
    //     </div>
    //     <div className="flex h-20 w-36 flex-col justify-center rounded-xl bg-gray-100 py-2 px-3 text-primary">
    //       <span className="w-fit rounded-full bg-accent py-1 px-2 font-bold">
    //         {discussions}
    //       </span>
    //       <span className="text-sm font-semibold">Discussions</span>
    //     </div>
    //   </div>
    // </div>
  );
}
