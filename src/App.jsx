import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "/src/home/Home";
import UseMap_Home from "./home/UseMap_Home";
import UseBeatBot_Home from "./home/UseBeatBot_Home";
import UseX86_Home from "./home/UseX86_Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "showcase_1",
    element: <UseBeatBot_Home />,
  },
  {
    path: "showcase_2",
    element: <UseMap_Home />,
  },
  {
    path: "showcase_3",
    element: <UseX86_Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
