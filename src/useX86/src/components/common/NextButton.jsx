import { newQuestion, finish } from "../../redux/slices";

const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  function handleNext() {
    dispatch(newQuestion());
  }
  function handleFinished() {
    dispatch(finish());
  }

  if (answer === null) return null;

  const isLastQuestion = index === numQuestions - 1;

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={isLastQuestion ? handleFinished : handleNext}
        className="
          bg-blue-600 text-white font-semibold
          px-8 py-3 rounded-lg
          transform transition-all duration-200
          hover:bg-blue-700 hover:scale-105 hover:shadow-lg
          active:scale-95
          flex items-center gap-2
        ">
        {isLastQuestion ? "Finish Quiz" : "Next Question"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default NextButton;
