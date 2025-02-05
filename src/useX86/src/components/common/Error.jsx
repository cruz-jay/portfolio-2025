const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-red-50 border border-red-200">
      <div className="flex items-center gap-3 text-red-700 mb-2">
        <span className="text-2xl animate-bounce">💥</span>
        <p className="text-lg font-semibold">Error Loading Questions</p>
      </div>
      <p className="text-red-600 text-center">
        There was an error fetching questions, Hire Me
      </p>
    </div>
  );
};

export default Error;
