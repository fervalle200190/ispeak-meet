import AsideNavItem from "../SideNavItem";
import SideNavIcons from "../SideNavIcons";

const NAV_ITEMS = [
  {
    title: "Dashboard",
    icon: (
      <SideNavIcons name='dashboard' />
    ),
    url: "/",
  },
  {
    title: "Courses",
    icon: (
      <SideNavIcons name='courses' />
    ),
    url: "courses",
  },
  {
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
        {NAV_ITEMS.map((item) => (
          <AsideNavItem title={item.title} icon={item.icon} url={item.url} />
        ))}
      </nav>
    </>
  );
}
