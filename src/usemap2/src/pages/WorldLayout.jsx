import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

const WorldLayout = () => {
  return (
    <div className="h-screen w-full p-2">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={25} minSize={0.5} maxSize={25}>
          <Sidebar />
        </Panel>

        <PanelResizeHandle className="w-2 bg-[#b6b6b6] hover:bg-slate-600 transition-colors cursor-col-resize" />

        <Panel>
          <div className="relative h-full w-full">
            <Map />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default WorldLayout;
