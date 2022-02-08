import { useContext } from "react";
import { SideBarContext } from "hooks/sideBarContext";
import { Link } from "wouter";

import SideNav from "../SideNav";

export default function SideBar() {
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  return (
    <>
      <aside className="fixed top-0 left-0 z-30 hidden h-screen w-60 flex-col bg-primary md:flex ">
        <header className="mb-4 p-2 text-center">
          <Link href="/" className=" text-5xl font-light text-white">
            i<span className="text-accent">.</span>speak
          </Link>
        </header>
        <SideNav />
      </aside>

      <aside
        className={`fixed top-0 left-0 z-30 flex h-screen w-60 flex-col bg-primary ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } duration-300 ease-in-out`}
      >
        <header className="mb-4 p-2 text-center">
          <button onClick={() => setIsOpen(false)}>X</button>
          <Link href="/" className=" text-5xl font-light text-white">
            i<span className="text-accent">.</span>speak
          </Link>
        </header>
        <SideNav />
      </aside>
    </>
  );
}
