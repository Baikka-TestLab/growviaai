import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContentProvider } from "./context/ContentContext";


import Final from "./Components/Final.jsx";
import ErrorPage from "./Components/Error.jsx";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import ContactPage from "./Components/contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Final />,          // ✅ consistent "element" syntax
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,      // ✅ no conflict with JS built-in Error
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <ContentProvider>
        <RouterProvider router={router} />
      </ContentProvider>
    
  </StrictMode>
);