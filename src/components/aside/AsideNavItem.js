import { Link } from "wouter";

export const AsideNavItem = ({title, icon, url}) => {
  return (
    <li className="w-full py-5 pl-10 hover:border-l-[3px] border-accent hover:bg-gray-100 hover:text-primary hover:font-bold font-Barlow group">
      <a href className="text-md">
        {icon}
        {title}
      </a>
      {/* <Link to={url} className="text-md">
        {icon}
        {title}
      </Link> */}
    </li>
  );
};
