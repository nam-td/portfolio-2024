import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import RCLayout from "./layouts/RCLayout.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import RecordLabelHome from "./pages/record-label/pages/RecordLabelHome.jsx";
import RecordLabelNotFound from "./pages/record-label/pages/NotFound.jsx";
import Artist from "./pages/record-label/pages/Artist.jsx";
import SerumLayout from "./pages/serum/layout/SerumLayout.jsx";
import FAQ from "./pages/serum/pages/FAQ.jsx";
import Products from "./pages/serum/pages/Products.jsx";
import Forum from "./pages/serum/pages/Forum.jsx";
import SerumPacks from "./pages/serum/pages/SerumPacks.jsx";
import Login from "./pages/serum/pages/Login.jsx";
import LegalInfo from "./pages/serum/pages/LegalInfo.jsx";
import Policies from "./pages/serum/pages/Policies.jsx";
import Contact from "./pages/serum/pages/Contact.jsx";
import SerumNotFound from "./pages/serum/pages/SerumNotFound.jsx";
import SerumHome from "./pages/serum/pages/SerumHome.jsx";
import ApexxLayout from "./pages/apexx-studio/layouts/ApexxLayout.jsx";
import ApexxHome from "./pages/apexx-studio/pages/ApexxHome.jsx";
import JagerHome from "./pages/jager/JagerHome.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects/",
        element: <Projects />,
      },
      {
        path: "/projects/:projectURL",
        element: <ProjectDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "livedemo/record-label",
    element: <RCLayout />,
    children: [
      {
        path: "",
        element: <RecordLabelHome />,
      },
      {
        path: "artist/:id",
        element: <Artist />,
      },
      {
        path: "*",
        element: <RecordLabelNotFound />,
      },
    ],
  },
  {
    path: "livedemo/serum",
    element: <SerumLayout />,
    children: [
      {
        path: "",
        element: <SerumHome />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "forum",
        element: <Forum />,
      },
      {
        path: "serum-packs",
        element: <SerumPacks />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "legal-info",
        element: <LegalInfo />,
      },
      {
        path: "policies",
        element: <Policies />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <SerumNotFound />,
      },
    ],
  },
  {
    path: "livedemo/apexx-studio",
    element: <ApexxLayout />,
    children: [
      {
        path: "",
        element: <ApexxHome />,
      },
    ],
  },
  {
    path: "livedemo/jager",
    element: <JagerHome />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
