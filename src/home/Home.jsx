import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./home/Home.jsx";
import MainPage from "./useX86/src/pages/MainPage.jsx";
import DataPage from "./useX86/src/pages/DataPage.jsx";

import WorldLayout from "./usemap2/src/pages/WorldLayout.jsx";
import PastCities from "./usemap2/src/pages/PastCities.jsx";
import FutureCityList from "./usemap2/src/pages/FutureCityList.jsx";
import { NewCitiesProvider } from "./usemap2/src/Context/Data.jsx";
import { FutureCityProvider } from "./usemap2/src/Context/Data_two.jsx";

import ProjectTwoHome from "./usemap2/src/pages/ProjectTwoHome.jsx";
import ProjectThreeHome from "./useX86/src/pages/ProjectThreeHome.jsx";

import UseMap_Home from "./home/UseMap_Home.jsx";
import UseX86_Home from "./home/UseX86_Home.jsx";
import UseBeatBot_Home from "./home/UseBeatBot_Home.jsx";

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
