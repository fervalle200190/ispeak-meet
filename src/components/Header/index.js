import React from "react";
import {useLocation} from "wouter";

import HeaderIcons from "components/HeaderIcons";
import HeaderSearchBar from "components/HeaderSearchBar";

export default function Header({ user }) {
  const [location, setLocation] = useLocation()
  const username = user.nombre.split(" ").slice(0, 1)

  const handleLogout = () => {
    window.localStorage.removeItem("loggedAppUser")
    window.location.reload(false)
  }

  return (
    <>
      <header className="flex items-center justify-between h-[72px] px-10 bg-white shadow-sm">
        <HeaderSearchBar />
        <div className="flex items-center">
          <HeaderIcons name="profile" />
          <span className="font-medium">{username}</span>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </header>
    </>
  );
}
