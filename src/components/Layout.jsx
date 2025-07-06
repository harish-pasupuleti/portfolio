// Layout.jsx or App.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto h-screen px-4 pt-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
