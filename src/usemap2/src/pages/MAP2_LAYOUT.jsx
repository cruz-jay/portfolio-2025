import { Link, Outlet, useLocation } from "react-router-dom";
import "../../src/output.css";

const MAP2_LAYOUT = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/usemap2";

  return (
    <>
      {isHomePage ? (
        <div className="min-h-screen p-2 bg-white">
          <main
            className="bg-gradient-to-br from-slate-900 via-blue-900 text-white h-screen w-100 p-6 flex flex-col
            min-h-[calc(100vh-1rem)] flex items-center justify-center">
            <section className="w-full p-2 flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Exploring My World
                </h1>

                <h2 className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  An upgraded of a past project of mine
                </h2>
              </div>

              <Link
                to="/usemap2/world"
                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full
                  transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                  hover:from-pink-600 hover:to-purple-600
                  focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
                Let's Gooo!
              </Link>
            </section>
          </main>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default MAP2_LAYOUT;
