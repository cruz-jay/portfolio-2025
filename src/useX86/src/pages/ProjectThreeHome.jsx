import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

function ProjectThreeHome() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default ProjectThreeHome;
