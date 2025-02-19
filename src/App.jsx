import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./home/Home";
import MainPage from "./useX86/src/pages/MainPage";
import DataPage from "./useX86/src/pages/DataPage";
import { ASM_LAYOUT } from "./useX86/src/pages/MainPage";

import { CitiesProvider } from "./useMap/src/contexts/CitiesContext";
import Homepage from "./useMap/src/pages/Homepage";
import AppLayout from "./useMap/src/pages/AppLayout";
import City from "./useMap/src/components/City";
import CityList from "./useMap/src/components/CityList";
import CountryList from "./useMap/src/components/CountyList";
import Form from "./useMap/src/components/Form";

import Login from "./useCert/src/pages/Login";
import Register from "./useCert/src/pages/Register";
import UserData from "./useCert/src/pages/UserData";
import RegistrationConfirmation from "./useCert/src/pages/RegistrationConfirmation";
import ProtectedRoute from "./useCert/src/components/ProtectedRoute";
import FacultyDashboard from "./useCert/src/components/FacultyDash";
import CERT_LAYOUT from "./useCert/src/pages/CERT_LAYOUT";

/// New
import MAP2_LAYOUT from "./usemap2/src/pages/MAP2_LAYOUT";
import WorldLayout from "./usemap2/src/pages/WorldLayout";
import PastCities from "./usemap2/src/pages/PastCities";
import FutureCityList from "./usemap2/src/pages/FutureCityList";
// NEW

import UseCertHome from "./home/useCertHome";
import UseMapHome from "./home/useMapHome";
import UseX86Home from "./home/useX86Home";
import "../src/output.css";

import { NewCitiesProvider } from "./usemap2/src/Context/Data";
import { FutureCityProvider } from "./usemap2/src/Context/Data_two";

function Logout() {
  localStorage.clear();
  return <Navigate to="/useCert/login" />; // Changed from "/login"
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "showcase_1",
    element: <UseCertHome />,
  },
  {
    path: "showcase_2",
    element: <UseMapHome />,
  },
  {
    path: "showcase_3",
    element: <UseX86Home />,
  },
  {
    path: "useCert",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "register",
        element: <RegisterAndLogout />,
      },
      {
        path: "",
        element: (
          <ProtectedRoute>
            <CERT_LAYOUT />
          </ProtectedRoute>
        ),
      },
      {
        path: "complete-profile",
        element: (
          <ProtectedRoute>
            <UserData />
          </ProtectedRoute>
        ),
      },
      {
        path: "registration-confirmation",
        element: (
          <ProtectedRoute>
            <RegistrationConfirmation />
          </ProtectedRoute>
        ),
      },
      {
        path: "faculty-dashboard",
        element: (
          <ProtectedRoute>
            <FacultyDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "useMap",
    element: (
      <CitiesProvider>
        <Homepage />
      </CitiesProvider>
    ),
  },
  {
    path: "useMap/app",
    element: (
      <CitiesProvider>
        <AppLayout />
      </CitiesProvider>
    ),
    children: [
      {
        path: "",
        element: <Navigate replace to="cities" />,
      },
      {
        path: "cities",
        element: <CityList />,
      },
      {
        path: "cities/:id",
        element: <City />,
      },
      {
        path: "countries",
        element: <CountryList />,
      },
      {
        path: "form",
        element: <Form />,
      },
    ],
  },
  {
    path: "useMap2",
    element: (
      <NewCitiesProvider>
        <FutureCityProvider>
          <MAP2_LAYOUT />
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
    element: <ASM_LAYOUT />,
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
