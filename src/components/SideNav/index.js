import SideNavItem from "../SideNavItem";
import SideNavIcons from "../SideNavIcons";

const NAV_ITEMS = [
  {
    id: 0,
    title: "Dashboard",
    icon: <SideNavIcons name="dashboard" />,
    url: "/",
  },
  {
    id: 1,
    title: "Courses",
    icon: <SideNavIcons name="courses" />,
    url: "/courses",
  },
  {
    id: 2,
    title: "Material",
    icon: <SideNavIcons name="material" />,
    url: "/refuerzo",
  },
  // {
  //   title: "Community",
  //   icon: (
  //     <SideNavIcons name='community' />
  //   ),
  //   url: "",
  // },
  // {
  //   title: "Matches",
  //   icon: (
  //     <SideNavIcons name='matches' />
  //   ),
  //   url: "",
  // },
  {
    id: 3,
    title: "Profile",
    icon: <SideNavIcons name="profile" />,
    url: "/profile",
  },
];

export default function SideNav() {
  return (
    <>
      <nav className="flex flex-col">
        {NAV_ITEMS.map(({ id, title, icon, url }) => (
          <SideNavItem key={id} title={title} icon={icon} url={url} />
        ))}
      </nav>
    </>
  );
}
