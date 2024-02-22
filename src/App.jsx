import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import HomePage from "./components/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/Notification", element: <Notification/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
