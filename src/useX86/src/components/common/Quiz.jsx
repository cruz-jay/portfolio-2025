import Options from "./Options";

const Quiz = ({ questions, answer, dispatch }) => {
  if (!questions) return null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
        {questions.question}
      </h4>
      <Options questions={questions} answer={answer} dispatch={dispatch} />
    </div>
  );
};

export default Quiz;
