import { useState } from "react";
import { newAnswer } from "../../redux/slices";

const Options = ({ questions, answer, dispatch }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const hasAnswered = answer !== null;
  const isMultipleChoice =
    Array.isArray(questions.correctOption) &&
    questions.correctOption.length > 1;

  function handleAnswer(index) {
    if (isMultipleChoice) {
      const newSelection = selectedOptions.includes(index)
        ? selectedOptions.filter((i) => i !== index)
        : [...selectedOptions, index];
      setSelectedOptions(newSelection);
    } else {
      dispatch(newAnswer([index])); // Always send as array
    }
  }

  function handleSubmit() {
    if (isMultipleChoice) {
      dispatch(newAnswer(selectedOptions));
    }
  }

  return (
    <div className="space-y-3">
      <div className="grid gap-3">
        {questions.options.map((option, index) => (
          <button
            key={option}
            disabled={hasAnswered}
            onClick={() => handleAnswer(index)}
            className={`
              p-4 text-left rounded-lg font-medium
              transition-all duration-200
              ${
                hasAnswered
                  ? questions.correctOption.includes(index)
                    ? "bg-green-100 border-2 border-green-500 text-green-700"
                    : answer?.includes(index)
                    ? "bg-red-100 border-2 border-red-500 text-red-700"
                    : "bg-gray-100 text-gray-500"
                  : isMultipleChoice && selectedOptions.includes(index)
                  ? "bg-blue-100 border-2 border-blue-500"
                  : "bg-white border-2 border-gray-200 hover:border-blue-500"
              }
            `}>
            {option}
          </button>
        ))}
      </div>

      {isMultipleChoice && !hasAnswered && selectedOptions.length > 0 && (
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Submit Answers
        </button>
      )}
    </div>
  );
};

export default Options;
