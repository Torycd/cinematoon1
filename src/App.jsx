import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import HomePage from "./components/HomePage";
import Notifications from "./components/Notifications";
import Collections from "./components/Collections";
import DiscoverPopular from "./components/DiscoverPopular";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          children: [
            { path: "/", element: <DiscoverPopular /> },
            { path: "/Notifications", element: <Notifications /> },
            { path: "/Collections", element: <Collections /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
