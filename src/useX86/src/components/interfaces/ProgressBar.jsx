const ProgressBar = ({ index, numQuestions, points, maxPoints }) => {
  const progress = ((index + 1) / numQuestions) * 100;
  const scorePercent = (points / maxPoints) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto mb-8 px-4">
      <div className="flex justify-between mb-2 text-gray-700 font-medium">
        <span>
          Question {index + 1}/{numQuestions}
        </span>
        <span>
          Points: {points}/{maxPoints} ({Math.round(scorePercent)}%)
        </span>
      </div>

      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-700 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}>
          <div className="w-full h-full bg-gradient-to-r from-red-500 to-rose-950 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
