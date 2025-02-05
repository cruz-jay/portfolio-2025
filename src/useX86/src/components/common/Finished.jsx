import { useState } from "react";
import { reset } from "../../redux/slices";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

const Finished = ({ points, maxPoints, dispatch }) => {
  const [firstName, setFirstName] = useState("");
  const [university, setUniversity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const percent = Math.ceil((points / maxPoints) * 100);

  const { message, color } = getScoreDetails(percent);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!firstName || !university) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("x86asm").insert([
        {
          first_name: firstName,
          university: university,
          score: points,
        },
      ]);

      if (error) throw error;
      setShowSuccess(true);
      setFirstName("");
      setUniversity("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  function redo() {
    dispatch(reset());
  }
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/data");
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Quiz Complete!
        </h2>
        <div className={`text-4xl font-bold mb-2 ${color}`}>{percent}%</div>
        <p className="text-gray-600">
          You scored {points} out of {maxPoints} points
        </p>
        <p className={`text-lg font-medium mt-4 ${color}`}>{message}</p>
      </div>

      {showSuccess ? (
        <div className="text-center mb-8 space-y-4">
          {" "}
          {/* Added space-y-4 here */}
          <p className="text-green-600 font-medium mb-4">
            Score submitted successfully!
          </p>
          <button
            onClick={redo}
            className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg
        font-semibold transform transition-all duration-200
        hover:bg-blue-700 hover:shadow-lg active:scale-95">
            Try Another Quiz
          </button>
          <button
            onClick={handleRedirect}
            className="w-full py-3 px-6 bg-green-600 text-white rounded-lg
          font-semibold transform transition-all duration-200
          hover:bg-green-700 hover:shadow-lg active:scale-95
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            See Data
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4 mb-8">
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all duration-200"
            />
            <input
              placeholder="University"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all duration-200"
            />
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-green-600 text-white rounded-lg
                font-semibold transform transition-all duration-200
                hover:bg-green-700 hover:shadow-lg active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "Submitting..." : "Submit Score"}
            </button>

            <button
              type="button"
              onClick={redo}
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg
                font-semibold transform transition-all duration-200
                hover:bg-blue-700 hover:shadow-lg active:scale-95
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <span className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
                Try Again
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

function getScoreDetails(percent) {
  if (percent >= 90) {
    return {
      message: "Outstanding! You're an x86 Assembly expert!",
      color: "text-green-600",
    };
  } else if (percent >= 70) {
    return {
      message: "Great job! You have solid knowledge!",
      color: "text-blue-600",
    };
  } else if (percent >= 50) {
    return {
      message: "Good effort! Keep practicing!",
      color: "text-yellow-600",
    };
  } else {
    return {
      message: "Keep learning! You'll get better!",
      color: "text-red-600",
    };
  }
}

export default Finished;
