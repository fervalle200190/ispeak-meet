import DashboardIcons from "components/DashboardIcons";

export default function DashboardResume({ title, duration, thumbnail, url }) {
  return (
    <div className="h-[26rem] w-[40rem] rounded-3xl bg-primary">
      <div className="relative h-3/4">
        <h3 className="absolute top-5 left-5 z-20 text-2xl font-medium text-white/90">
          {title}
        </h3>
        <div className="absolute top-1/2 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 p-10 text-white">
          <DashboardIcons name="play" />
        </div>
        <div className="absolute top-0 left-0 z-10 h-full w-full rounded-t-3xl rounded-bl-[2rem] bg-black opacity-20"></div>
        <img
          src={thumbnail}
          alt=""
          className="absolute top-0 left-0 h-full w-full rounded-bl-[2rem]"
        />
      </div>
      <div className="flex h-1/4 w-full flex-wrap items-center justify-between px-10">
        <span className="text-white">{duration}</span>
        <button className="rounded-lg bg-accent py-2 px-5 text-xl font-medium text-primary">
          Continue your recent courses {">"}
        </button>
      </div>
    </div>
  );
}
