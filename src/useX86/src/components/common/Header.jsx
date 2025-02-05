import { useDispatch } from "react-redux";
import logo from "../../assets/x86.png";
import { reset } from "../../redux/slices";
import { Link } from "react-router-dom";

const Header = ({ dispatch }) => {
  dispatch = useDispatch();
  function restart() {
    dispatch(reset());
  }

  return (
    <div className="bg-[#CF0A2C] shadow-lg">
      <Link to="/">
        <header className="container mx-auto py-4 px-6">
          <div
            className="flex items-center justify-center gap-6 cursor-pointer group"
            onClick={restart}>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="x86 Assembly"
                className="w-12 h-12 object-contain bg-white p-2 rounded-full shadow-md
              group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform">
                  x86 Assembly Quiz
                </h1>
                <div className="flex items-center gap-2">
                  <span className="text-gray-200 text-sm">
                    University of Nevada, Las Vegas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Link>
      <div className="h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 py-3" />
    </div>
  );
};

export default Header;
