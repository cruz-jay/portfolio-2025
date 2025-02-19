import { NavLink } from "react-router-dom";
import logo from "../assets/useMap-bg.png";

const Logo = () => {
  return (
    <>
      <NavLink to="/">
        <img src={logo} alt="WorldWise logo" />
      </NavLink>
    </>
  );
};

export default Logo;
