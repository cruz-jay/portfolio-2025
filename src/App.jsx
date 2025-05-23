import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Use absolute imports instead of relative ones
import Home from "/src/home/Home";
import MainPage from "/src/useX86/src/pages/MainPage";
import DataPage from "/src/useX86/src/pages/DataPage";

import WorldLayout from "/src/usemap2/src/pages/WorldLayout";
import PastCities from "/src/usemap2/src/pages/PastCities";
import FutureCityList from "/src/usemap2/src/pages/FutureCityList";
import { NewCitiesProvider } from "/src/usemap2/src/Context/Data";
import { FutureCityProvider } from "/src/usemap2/src/Context/Data_two";

import ProjectTwoHome from "/src/usemap2/src/pages/ProjectTwoHome";
import ProjectThreeHome from "/src/useX86/src/pages/ProjectThreeHome";

import UseMap_Home from "/src/home/UseMap_Home";
import UseX86_Home from "/src/home/UseX86_Home";
import UseBeatBot_Home from "/src/home/UseBeatBot_Home";

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
  {
    path: "useMap",
    element: (
      <NewCitiesProvider>
        <FutureCityProvider>
          <ProjectTwoHome />
        </FutureCityProvider>
      </NewCitiesProvider>
    ),
    children: [
      {
        path: "world",
        element: <WorldLayout />,
        children: [
          {
            path: "",
            element: <Navigate replace to="cities" />,
          },
          {
            path: "cities",
            element: <PastCities />,
          },
          {
            path: "future",
            element: <FutureCityList />,
          },
        ],
      },
    ],
  },
  {
    path: "useX86",
    element: <ProjectThreeHome />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "data",
        element: <DataPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
