export const AsideNavItem = ({title, icon}) => {
  return (
    <li className="w-full py-5 pl-10 hover:border-l-[3px] border-accent hover:bg-gray-100 hover:text-primary hover:font-bold font-Barlow group">
      <a href className="text-md">
        {icon}
        {title}
      </a>
    </li>
  );
};
