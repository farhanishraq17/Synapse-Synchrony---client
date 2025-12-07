import { NavLink } from 'react-router';

const NavButton = ({
  label,
  icon: Icon,
  address,
  onClick,
  textSize = 'base',
}) => {
  return (
    <NavLink
      to={address}
      onClick={onClick}
      className={({ isActive }) => `
        btn bg-transparent border-0 shadow-none tracking-wider text-${textSize} flex items-center gap-2 transition-colors duration-200
        ${
          isActive
            ? 'text-[#EF4444] font-semibold' // Active state color
            : 'text-gray-700 hover:text-[#EF4444] dark:text-gray-200 dark:hover:text-[#EF4444]' // Default & Hover
        }
      `}
    >
      {Icon && <Icon size={20} />}
      {label}
    </NavLink>
  );
};

export default NavButton;
