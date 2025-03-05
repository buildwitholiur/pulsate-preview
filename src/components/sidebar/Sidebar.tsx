import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 left-0 w-full max-w-[249px] h-screen p-5 pt-2.5 border-r border-custom-gray-100 overflow-auto flex flex-col justify-between">
      <div className="relative">
        <Link to="/" className="w-[117px] h-[29px] mb-[9px]">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>

        <nav>
          <div className="pt-5 pb-5 border-b border-custom-gray-100 ">
            <ul className="flex flex-col gap-[5px]">
              <li>
                <Link
                  to="/"
                  className="bg-custom-brand-600 flex items-center gap-3.5 py-3 px-3.5 rounded-[10px]"
                >
                  <img
                    className="w-5 h-5"
                    src="/images/deactive-icon.svg"
                    alt="deactive"
                  />
                  <span className="flex-1">Opportunity Engine</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="pt-5 pb-2.5 border-b border-custom-gray-100 ">
            <h3 className="text-custom-gray-400 font-normal mb-[15px]">
              Analyze
            </h3>

            <ul className="flex flex-col gap-[5px]">
              <li>
                <Link
                  to="/"
                  className="font-normal bg-transparent flex items-center gap-3.5 py-3 px-3.5 rounded-[10px]"
                >
                  <img
                    className="w-5 h-5"
                    src="/images/deactive-icon.svg"
                    alt="deactive"
                  />
                  <span className="flex-1">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="font-normal bg-transparent flex items-center gap-3.5 py-3 px-3.5 rounded-[10px]"
                >
                  <img
                    className="w-5 h-5"
                    src="/images/stats.svg"
                    alt="deactive"
                  />
                  <span className="flex-1">Campaigns Stats</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="pt-5 pb-2.5 border-b border-custom-gray-100 ">
            <h3 className="text-custom-gray-400 font-normal mb-[15px]">
              Targeting
            </h3>

            <ul className="flex flex-col gap-[5px]">
              <li>
                <Link
                  to="/"
                  className="font-normal bg-transparent flex items-center gap-3.5 py-3 px-3.5 rounded-[10px]"
                >
                  <img
                    className="w-5 h-5"
                    src="/images/segments.svg"
                    alt="deactive"
                  />
                  <span className="flex-1">Segments</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="font-normal bg-transparent flex items-center gap-3.5 py-3 px-3.5 rounded-[10px]"
                >
                  <img
                    className="w-5 h-5"
                    src="/images/geofences.svg"
                    alt="deactive"
                  />
                  <span className="flex-1">Geofences</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="font-normal bg-transparent flex items-center gap-3.5 py-3 px-3.5 rounded-[10px]"
                >
                  <img
                    className="w-5 h-5"
                    src="/images/beacons.svg"
                    alt="deactive"
                  />
                  <span className="flex-1">Beacons</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="pt-5 pb-2.5 border-b border-custom-gray-100 ">
            <h3 className="text-custom-gray-400 font-normal mb-[15px]">
              Others
            </h3>

            <ul className="flex flex-col gap-[5px]">
              <li>
                <Link
                  to="/"
                  className="font-normal bg-transparent flex items-center gap-3.5 py-3 px-3.5 rounded-[10px]"
                >
                  <img
                    className="w-5 h-5"
                    src="/images/campaigns.svg"
                    alt="deactive"
                  />
                  <span className="flex-1">Campaigns</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="font-normal bg-transparent flex items-center gap-3.5 py-3 px-3.5 rounded-[10px]"
                >
                  <img
                    className="w-5 h-5"
                    src="/images/journeys.svg"
                    alt="deactive"
                  />
                  <span className="flex-1">Journeys</span>
                  <span className="bg-custom-brand-50 text-custom-brand-900 p-1.5 rounded-[10px]">
                    New
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="font-normal bg-transparent flex items-center gap-3.5 py-3 px-3.5 rounded-[10px]"
                >
                  <img
                    className="w-5 h-5"
                    src="/images/users.svg"
                    alt="deactive"
                  />
                  <span className="flex-1">Users</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
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

          <p className="text-custom-gray-700 font--14 block">Rahul Dambhale</p>
        </div>
      </div>
      {/* Avatar */}
    </aside>
  );
};

export default Sidebar;
