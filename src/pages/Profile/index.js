import { useEffect, useState } from "react";
import getUser from "services/getUser";

export default function ProfilePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser().then((response) => setUser(response));
  }, []);

  return (
    <section className="lg:pd-10 flex flex-col p-5">
      <div className="flex w-full max-w-lg rounded-xl bg-primary p-5">
        <form className="w-full">
          <div className="mb-3 w-full">
            <label className="inline-block w-1/3 pr-2 text-right font-semibold text-gray-50">
              Name
            </label>
            <input
              type="text"
              value={user.nombre}
              className="w-1/2 border-b  border-accent bg-transparent px-2 text-gray-50 focus-visible:border-none"
            ></input>
          </div>
          <div className="mb-3">
            <label className="mr-2 font-semibold text-gray-50">Email</label>
            <input
              type="text"
              value={user.email}
              className="border-b  border-accent bg-transparent px-2 text-gray-50 focus-visible:border-none"
            ></input>
          </div>
          <div className="mb-3">
            <label className="mr-2 font-semibold text-gray-50">Password</label>
            <input
              type="password"
              value={user.password}
              className="border-b  border-accent bg-transparent px-2 text-gray-50 focus-visible:border-none"
            ></input>
          </div>
          <div className="mb-3 w-full">
            <label className="inline-block w-1/3 pr-2 text-right font-semibold text-gray-50">
              Cellphone Number
            </label>
            <input
              type="password"
              value={user.telefono}
              className="border-b  border-accent bg-transparent px-2 text-gray-50 focus-visible:border-none"
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
}
