import { useNavigate, useRouteError } from "react-router-dom";

const NotFound = () => {
  const navigation = useNavigate();
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Something Went Wrong...
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            {error.data ||
              error.message ||
              "The page you're looking for doesn't exist or has been moved."}
          </p>

          <button onClick={() => navigation(-1)}>← Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
