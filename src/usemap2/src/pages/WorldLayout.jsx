import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

const WorldLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="h-full">
        <Sidebar />
      </div>

      {/* Map container positioned on the right */}
      <div className="flex-1 h-full relative">
        <Map />
      </div>
    </div>
  );
};

export default WorldLayout;
