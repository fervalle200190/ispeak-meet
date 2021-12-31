import { Link } from "wouter";

export default function SideNavItem ({ title, icon, url = '/' }) {
  return (
    <Link
      href={url}
      className="text-md py-5 pl-10 w-full text-white shover:border-l-[3px] border-accent hover:bg-gray-100 hover:text-primary hover:font-bold group"
    >
      {icon}
      {title}
    </Link>
  );
};
