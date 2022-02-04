import React from "react";
import SideNav from "../SideNav";

export default function SideBar() {
  return (
    <>
      <aside className="md:flex flex-col fixed h-screen w-60 bg-primary hidden">
        <header className="mb-4 p-2 text-center">
          <a href className=" text-5xl text-white font-light">
            i<span className="text-accent">.</span>speak
          </a>
        </header>
        <SideNav />
      </aside>
    </>
  );
}
