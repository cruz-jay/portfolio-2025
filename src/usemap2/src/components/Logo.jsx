import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="transition-transform duration-300 hover:scale-105">
      <NavLink to="/useMap" className="block">
        <div className="relative">
          <img
            src="/images/useMap-bg.png"
            alt="logo"
            className="w-auto h-16 drop-shadow-lg"
          />
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
