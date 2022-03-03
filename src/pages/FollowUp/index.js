export default function FollowUpPage() {
  return (
    <div className="w-full p-5">
      <div className="flex w-full flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <h1 className="text-primary text-xl font-semibold">
            Follow Up<span className="text-accent">.</span>
          </h1>
        </div>
        <div className="w-full">
          <table className="w-full">
            <thead className="text-primary/60 h-10 border-b-2">
              <tr>
                <th className="text-left font-semibold">ID</th>
                <th className="font-semibold">Student</th>
                <th className="font-semibold">Course</th>
                <th className="font-semibold">Module</th>
                <th className="font-semibold">Class</th>
                <th className="font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {/* <Fo assistances={assistances} /> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
