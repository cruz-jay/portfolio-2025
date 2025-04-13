import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./home/Home";
import MainPage from "./useX86/src/pages/MainPage";
import DataPage from "./useX86/src/pages/DataPage";

import WorldLayout from "./usemap2/src/pages/WorldLayout";
import PastCities from "./usemap2/src/pages/PastCities";
import FutureCityList from "./usemap2/src/pages/FutureCityList";
import { NewCitiesProvider } from "./usemap2/src/Context/Data";
import { FutureCityProvider } from "./usemap2/src/Context/Data_two";

import ProjectTwoHome from "./usemap2/src/pages/ProjectTwoHome";
import ProjectThreeHome from "./useX86/src/pages/ProjectThreeHome";

import UseMap_Home from "./home/useMap_Home";
import UseX86_Home from "./home/useX86_Home";
import UseBeatBot_Home from "./home/UseBeatBot_Home";

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
