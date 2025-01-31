import { useDispatch } from "react-redux";
import { start } from "../redux/slices";

const StartScreen = ({ dispatch, numQuestions }) => {
  dispatch = useDispatch();
  function handleClick() {
    dispatch(start());
  }

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <h3 className="text-3xl text-center font-bold text-gray-800 mb-8 max-w-2xl">
        <span className="text-red-600">{numQuestions}</span> questions to test
        your knowledge on{" "}
        <span className="bg-gradient-to-r from-red-400 to-purple-600 font-extrabold text-transparent bg-clip-text">
          x86 Assembly
        </span>
      </h3>

      <button
        onClick={handleClick}
        className="
          bg-red-600 text-white font-semibold
          px-8 py-4 rounded-lg
          transform transition-all duration-200
          hover:bg-blue-700 hover:scale-105 hover:shadow-lg
          active:scale-95
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          group
        ">
        <span className="flex items-center gap-2">
          Let's Start
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default StartScreen;
