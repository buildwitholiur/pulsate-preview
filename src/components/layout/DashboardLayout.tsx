import { Outlet } from "react-router";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex items-start">
        <Sidebar />

        <div className="flex-1">
          <Header />

          <main className="mt-[46px] px-8 pt-5 overflow-hidden pb-[330px]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
