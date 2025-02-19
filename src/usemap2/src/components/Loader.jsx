const Loader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 h-24">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
          style={{
            animationDelay: `${index * 0.1}s`,
            animationDuration: "1s",
          }}
        />
      ))}
    </div>
  );
};

export default Loader;
