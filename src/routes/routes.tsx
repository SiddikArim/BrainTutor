import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home/Index";

import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
