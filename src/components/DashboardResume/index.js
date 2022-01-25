export default function DashboardResume({title, duration, thumbnail, url}) {
  return (
    <div className="h-[26rem] w-[40rem] rounded-3xl bg-primary">
      <div className="relative h-3/4">
        <h3 className="absolute top-5 left-5 z-20 text-2xl text-white/90 font-medium">
          {title}
        </h3>
        <div className="rounded-full h-10 w-10 bg-white/50 text-white z-20 p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <a href>{">"}</a>
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-20 z-10 rounded-t-3xl rounded-bl-[2rem]"></div>
        <img
          src={thumbnail}
          alt=""
          className="rounded-bl-[2rem] absolute top-0 left-0 h-full w-full"
        />
      </div>
      <div className="flex items-center h-1/4 w-full px-10 justify-between">
        <span className="text-white">{duration}</span>
        <a
          href={url}
          className="bg-accent text-primary py-2 px-5 text-xl rounded-lg font-medium"
        >
          Continue your recent courses {">"}
        </a>
      </div>
    </div>
  );
}
