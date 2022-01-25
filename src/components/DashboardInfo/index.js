export default function DashboardInfo({username, avatar, completed, inProgress, certificates, discussions}) {
  return (
    <div className="h-[26rem] w-[26rem] rounded-3xl bg-primary flex flex-col items-center py-5 gap-2">
      <img
        src={avatar}
        alt=""
        className="rounded-full h-40 w-40 border-4 border-white"
      />
      <span className="text-xl font-semibold text-white tracking-wide">
        Hey, {username}.
      </span>
      <small className="text-white">Welcome back, nice to see you again!</small>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col bg-gray-100 h-20 w-36 rounded-xl py-2 px-3 justify-center text-primary">
          <span className="bg-accent w-fit py-1 px-2 rounded-full font-bold">
            {completed}
          </span>
          <span className="font-semibold text-sm">Completed</span>
        </div>
        <div className="flex flex-col bg-gray-100 h-20 w-36 rounded-xl py-2 px-3 justify-center text-primary">
          <span className="bg-accent w-fit py-1 px-2 rounded-full font-bold">
            {inProgress}
          </span>
          <span className="font-semibold text-sm">In Progress</span>
        </div>
        <div className="flex flex-col bg-gray-100 h-20 w-36 rounded-xl py-2 px-3 justify-center text-primary">
          <span className="bg-accent w-fit py-1 px-2 rounded-full font-bold">
            {certificates}
          </span>
          <span className="font-semibold text-sm">Certificates</span>
        </div>
        <div className="flex flex-col bg-gray-100 h-20 w-36 rounded-xl py-2 px-3 justify-center text-primary">
          <span className="bg-accent w-fit py-1 px-2 rounded-full font-bold">
            {discussions}
          </span>
          <span className="font-semibold text-sm">Discussions</span>
        </div>
      </div>
    </div>
  );
}
