import React from "react";

import HeaderIcons from "components/HeaderIcons";
import HeaderSearchBar from "components/HeaderSearchBar";

export default function Header({ user }) {
  const username = user.nombre.split(" ").slice(0, 1)

  const handleLogout = () => {
    window.localStorage.removeItem("loggedAppUser")
    window.location.reload(false)
  }

  return (
    <>
      <header className="flex items-center justify-between h-[72px] px-10 bg-white shadow-sm">
        <HeaderSearchBar />
        <div className="flex gap-5">
          <div className="flex items-center">
            <HeaderIcons name="profile" />
            <span className="font-medium text-primary">{username}</span>
          </div>
          <button onClick={handleLogout} className="text-primary">Logout</button>
        </div>
      </header>
    </>
  );
}
