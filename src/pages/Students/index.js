import { useState, useEffect } from "react";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  useEffect(() => {}, []);

  return (
    <div className="w-full p-5">
      <div className="flex w-full flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <h1 className="text-primary text-xl font-semibold">
            Students<span className="text-accent">.</span>
          </h1>
        </div>
        <div className="w-full">
          <table className="w-full">
            <thead className="text-primary/60 h-10 border-b-2">
              <tr>
                <th className="text-left font-semibold">ID</th>
                <th className="font-semibold">Name</th>
                <th className="font-semibold">Email</th>
                <th className="font-semibold">Country</th>
                <th className="font-semibold">Course</th>
                <th className="font-semibold">Progress</th>
                <th className="font-semibold">Days</th>
              </tr>
            </thead>
            <tbody className="text-gray-500"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
