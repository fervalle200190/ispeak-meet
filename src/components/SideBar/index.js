import { Link } from "wouter";

import SideNav from "../SideNav";

export default function SideBar() {
  return (
    <>
      <aside className="fixed hidden h-screen w-60 flex-col bg-primary md:flex">
        <header className="mb-4 p-2 text-center">
          <Link href="/" className=" text-5xl font-light text-white">
            i<span className="text-accent">.</span>speak
          </Link>
        </header>
        <SideNav />
      </aside>
    </>
  );
}
