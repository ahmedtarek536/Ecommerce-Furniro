import { Outlet } from "react-router-dom";
import Sidebar from "../features/dashboard/Sidebar";
import DashboardHeader from "../features/dashboard/DashboardHeader";
import { useSelector } from "react-redux";

function Dashboard() {
  const { id } = useSelector((state) => state.account);
  if (!id) return null;

  return (
    <div className="grid h-screen grid-cols-10 gap-0">
      <div className="col-span-2 h-full overflow-auto shadow-xl">
        <Sidebar />
      </div>
      <main className="col-span-8 overflow-auto bg-gray-200 px-6 py-3">
        <DashboardHeader />
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
