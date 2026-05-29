import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default Layout;
