import { useEffect, useState } from "react";
import getAllCoursesByUser from "services/getAllCoursesByUser";

const getCompleted = (courses) => {
  const completed = courses.filter(
    (course) => course.porcentajeCompletado === 100
  );
  return completed.length;
};

const getInProgress = (courses) => {
  const inProgress = courses.filter((course) => {
    if (course.porcentajeCompletado !== 100) {
      const { nombre, porcentajeCompletado } = course;
      return { nombre, porcentajeCompletado };
    }
  });

  return inProgress;
};

export default function DashboardInfo() {
  const [completed, setCompleted] = useState();
  const [inProgress, setInProgress] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("loggedAppUser"));
  const username = user.nombre.split(" ").slice(0, 1);

  useEffect(() => {
    getAllCoursesByUser(user.id).then((response) => {
      setCompleted(getCompleted(response));
      setInProgress(getInProgress(response));
    });
  }, [user.id]);

  return (
    <div className="flex w-full flex-col gap-5 rounded-xl bg-primary p-5 text-gray-50">
      <div className="flex flex-col">
        <span className="text-center text-xl font-semibold ">
          Hey, {username}
          <span className="text-accent">.</span>
        </span>
        <span className="text-center text-sm">
          Welcome back, nice to see you again!
        </span>
      </div>
      <div className="grid auto-cols-min grid-cols-2 gap-5">
        <div className="flex flex-col rounded-xl bg-white p-5">
          <div className="flex h-8 w-8  items-center justify-center rounded-full bg-accent text-xl font-bold text-primary">
            <span>{completed}</span>
          </div>{" "}
          <span className="font-semibold text-primary">Completed</span>
        </div>
        <div className="flex flex-col rounded-xl bg-white p-5">
          <div className="flex h-8 w-8  items-center justify-center rounded-full bg-accent text-xl font-bold text-primary">
            <span>{inProgress.length}</span>
          </div>{" "}
          <span className="font-semibold text-primary">In Progress</span>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-3">
          {inProgress.map(({ nombre, porcentajeCompletado }) => {
            return (
              <div className="flex flex-col gap-2">
                <span className="font-semibold">{nombre}</span>
                <div className="h-5 w-full rounded-xl bg-accent/30">
                  <div
                    className="flex h-full min-w-fit items-center rounded-xl bg-accent px-2 text-right text-primary"
                    style={{ width: porcentajeCompletado + "%" }}
                  >
                    <span className="w-full">{porcentajeCompletado}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
