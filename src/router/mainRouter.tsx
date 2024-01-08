import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../pages/HomeScreen";
import AboutScreen from "../pages/AboutScreen";
import ContactScreen from "../pages/ContactScreen";

export const mainApp = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "/about",
        element: <AboutScreen />,
      },
      {
        index: true,
        path: "/contact",
        element: <ContactScreen />,
      },
    ],
  },
]);
