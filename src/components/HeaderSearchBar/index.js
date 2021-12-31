import React from "react";

import HeaderIcons from "../HeaderIcons";

export default function HeaderSearchBar() {
  return (
    <>
      <form className="flex items-center h-[36px] w-1/2 rounded-md border border-gray-200">
        <HeaderIcons name='search' />
        <input
          type="text"
          className="px-1 text-xs h-full w-full outline-none"
          placeholder="Search Course or Instructor"
        />
      </form>
    </>
  );
}
