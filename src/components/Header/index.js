import { useContext } from "react";

import HeaderIcons from "components/HeaderIcons";
import HeaderSearchBar from "components/HeaderSearchBar";
import { SideBarContext } from "hooks/sideBarContext";

export default function Header({ user }) {
  const username = user.nombre.split(" ").slice(0, 1);

  const { setIsOpen } = useContext(SideBarContext);

  const handleLogout = () => {
    window.localStorage.removeItem("loggedAppUser");
    window.location.reload(false);
  };

  return (
    <>
      <header className="flex h-[72px] w-full items-center justify-between bg-white px-10 shadow-sm">
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          +
        </button>
        <HeaderSearchBar />
        <div className="flex gap-5">
          <div className="flex items-center">
            <HeaderIcons name="profile" />
            <span className="font-medium text-primary">{username}</span>
          </div>
          {/* <button onClick={handleLogout} className="text-primary">
            Logout
          </button> */}
        </div>
      </header>
    </>
  );
}
