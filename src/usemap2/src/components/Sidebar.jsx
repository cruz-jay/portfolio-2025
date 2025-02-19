import Logo from "./Logo";
import SidebarNav from "./SidebarNav";

function Sidebar() {
  return (
    <div className="bg-gradient-to-bl from-slate-900 via-blue-900 text-white h-screen w-100 p-6 flex flex-col">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="flex-1 overflow-hidden">
        <SidebarNav />
      </div>
    </div>
  );
}

export default Sidebar;
