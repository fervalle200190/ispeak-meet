import AsideNavItem from "../SideNavItem";
import SideNavIcons from "../SideNavIcons";

const NAV_ITEMS = [
  {
    id: 0,
    title: "Dashboard",
    icon: (
      <SideNavIcons name='dashboard' />
    ),
    url: "/",
  },
  {
    id: 1,
    title: "Courses",
    icon: (
      <SideNavIcons name='courses' />
    ),
    url: "/courses",
  },
  {
    id: 2,
    title: "Material",
    icon: (
      <SideNavIcons name='material' />
    ),
    url: "",
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
  // {
  //   title: "Profile",
  //   icon: (
  //     <SideNavIcons name='profile' />
  //   ),
  //   url: "",
  // },
];

export default function SideNav() {
  return (
    <>
      <nav className="flex flex-col">
        {NAV_ITEMS.map(({id, title, icon, url}) => (
          <AsideNavItem key={id} title={title} icon={icon} url={url} />
        ))}
      </nav>
    </>
  );
}
