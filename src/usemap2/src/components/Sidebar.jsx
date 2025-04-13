import Logo from "./Logo";
import SidebarNav from "./SidebarNav";

function Sidebar() {
  return (
    <div className="relative bg-gradient-to-bl from-slate-900 via-blue-900 to-slate-800 text-white h-full w-96 flex flex-col shadow-lg">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-8">
          <Logo />
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <SidebarNav />
        </div>

        <div className="mt-auto pt-4 border-t border-blue-700 text-sm text-blue-300">
          <a href="/" className="block hover:text-blue-200 transition-colors">
            <p>{new Date().getFullYear()} useMap • Click to go home</p>
          </a>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <div className="w-40 h-40 rounded-full bg-blue-600/5 absolute -bottom-20 -left-20"></div>
        <div className="w-32 h-32 rounded-full bg-indigo-600/10 absolute -bottom-10 right-10"></div>
      </div>
    </div>
  );
}

export default Sidebar;
