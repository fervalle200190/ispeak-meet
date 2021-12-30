import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as CoursesIcon } from "../../assets/myCourses.svg";
import { ReactComponent as MaterialsIcon } from "../../assets/additionalMaterial.svg";
import { ReactComponent as CommunityIcon } from "../../assets/community.svg";
import { ReactComponent as MatchesIcon } from "../../assets/myMatches.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import AsideNavItem from "./AsideNavItem";

const NAV_ITEMS = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />,
    url:''
  },
  {
    title: 'Course',
    icon: <DashboardIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />,
    url:''
  },
  {
    title: 'Material',
    icon: <DashboardIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />,
    url:''
  },
  {
    title: 'Community',
    icon: <DashboardIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />,
    url:''
  },
  {
    title: 'Matches',
    icon: <DashboardIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />,
    url:''
  },
  {
    title: 'Profile',
    icon: <DashboardIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />,
    url:''
  },
]

export default function AsideNav () {
  return (
    NAV_ITEMS.map((item => <AsideNavItem title={item.title} icon={item.icon} url={item.url} />))
  )
}

// export const AsideNav = () => {
//   return (
//     <aside className="flex flex-col fixed h-screen w-60 bg-gradient-to-b from-primary to-black">
//       <header className="mb-4 p-2 text-center">
//         <a href className=" text-5xl text-white font-light">
//           i.speak
//         </a>
//       </header>
//       <nav className="flex flex-col">
//         <AsideNavItem
//           title={"Dashboard"}
//           icon={
//             <DashboardIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />
//           }
//           url="/"
//         />
//         <AsideNavItem
//           title={"Courses"}
//           icon={
//             <CoursesIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />
//           }
//           url="/courses"
//         />
//         <AsideNavItem
//           title={"Materials"}
//           icon={
//             <MaterialsIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />
//           }
//         />
//         <AsideNavItem
//           title={"Community"}
//           icon={
//             <CommunityIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />
//           }
//         />
//         <AsideNavItem
//           title={"Matches"}
//           icon={
//             <MatchesIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />
//           }
//         />
//         <AsideNavItem
//           title={"Profile"}
//           icon={
//             <ProfileIcon className="h-5 w-5 mr-2 inline-block fill-white group-hover:fill-accent" />
//           }
//         />
//       </nav>
//     </aside>
//   );
// };
