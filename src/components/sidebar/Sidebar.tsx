import { Link } from "react-router";
import SidebarNav, { navCategory } from "./SidebarNav";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  const navCategories: navCategory[] = [
    {
      items: [
        {
          icon: "/images/deactive-icon.svg",
          text: "Opportunity Engine",
          to: "/",
        },
      ],
    },
    {
      title: "Analyze",
      items: [
        {
          icon: "/images/deactive-icon.svg",
          text: "Dashboard",
          to: "/dashboard",
        },
        {
          icon: "/images/stats.svg",
          text: "Campaigns Stats",
          to: "/campaigns-stats",
        },
      ],
    },
    {
      title: "Targeting",
      items: [
        {
          icon: "/images/segments.svg",
          text: "Segments",
          to: "/segments",
        },
        {
          icon: "/images/geofences.svg",
          text: "Geofences",
          to: "/geofences",
        },
        {
          icon: "/images/beacons.svg",
          text: "Beacons",
          to: "/beacons",
        },
      ],
    },
    {
      title: "Others",
      items: [
        {
          icon: "/images/campaigns.svg",
          text: "Campaigns",
          to: "/campaigns",
        },
        {
          icon: "/images/journeys.svg",
          text: "Journeys",
          to: "/journeys",
          badge: "New",
        },
        {
          icon: "/images/users.svg",
          text: "Users",
          to: "/users",
        },
      ],
    },
  ];

  return (
    <aside
      className={`fixed lg:sticky top-0 w-full lg:w-fit left-0 h-screen z-50 lg:z-20 bg-black/80 lg:bg-transparent lg:visible lg:opacity-100 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-6 right-6 z-30 lg:hidden"
      >
        <img className="w-5 h-5" src="/images/close.png" alt="close" />
      </button>

      <div
        className={`relative w-[249px] lg:left-0 h-full bg-custom-white p-5 pt-2.5 border-r border-custom-gray-100 overflow-auto flex flex-col gap-10 justify-between scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-w-1 scrollbar-thumb-custom-gray-100 scrollbar-track-transparent transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="relative">
          <Link to="/" className="w-[117px] h-[29px] mb-[9px]">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>

          <SidebarNav navCategories={navCategories} />
        </div>

        {/* Avatar */}
        <div className="flex items-center gap-4 px-4 py-3">
          <img
            className="w-[34px] h-[34px]"
            src="/images/avatar.svg"
            alt="User avatar"
          />

          <div className="w-full max-w-[108px] space-y-1 text-left">
            <h3 className="text-custom-gray-300 font-normal font--12 block">
              Profile
            </h3>

            <p className="text-custom-gray-700 font--14 block">
              Rahul Dambhale
            </p>
          </div>
        </div>
        {/* Avatar */}
      </div>
    </aside>
  );
};

export default Sidebar;
