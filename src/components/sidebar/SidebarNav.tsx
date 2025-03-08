import { NavLink } from "react-router";

interface MenuItem {
  icon: string;
  text: string;
  to: string;
  badge?: string;
}

export interface navCategory {
  title?: string;
  items: MenuItem[];
}

interface SidebarNavProps {
  navCategories: navCategory[];
}

const SidebarNav = ({ navCategories }: SidebarNavProps) => {
  return (
    <nav>
      {navCategories.map((navCategory, index) => (
        <div
          key={index}
          className={`pt-5 pb-2.5 border-b border-custom-gray-100`}
        >
          {navCategory.title && (
            <h3 className="text-custom-gray-400 font-normal mb-[15px]">
              {navCategory.title}
            </h3>
          )}
          <ul className="flex flex-col gap-[5px]">
            {navCategory.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3.5 py-3 px-3.5 rounded-[10px] ${
                      !navCategory.title && isActive
                        ? "bg-custom-brand-600 mb-2.5"
                        : isActive
                        ? "bg-custom-brand-600"
                        : "bg-transparent font-normal"
                    }`
                  }
                >
                  <img className="w-5 h-5" src={item.icon} alt={item.text} />
                  <span className="flex-1">{item.text}</span>
                  {item.badge && (
                    <span className="bg-custom-brand-50 text-custom-brand-900 p-1.5 rounded-[10px]">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default SidebarNav;
