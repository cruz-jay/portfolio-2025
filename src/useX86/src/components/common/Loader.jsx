const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-gray-600 text-lg font-medium animate-pulse">
        Loading questions...
      </p>
    </div>
  );
};

export default Loader;
