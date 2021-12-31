import React from "react";

import HeaderIcons from "../HeaderIcons";
import HeaderSearchBar from "../HeaderSearchBar";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between h-[72px] px-10 bg-white shadow-sm">
        <HeaderSearchBar />
        <div className="flex items-center">
          <HeaderIcons name="profile" />
          <span className="font-medium">Username</span>
        </div>
      </header>
    </>
  );
}
