import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Applayout from "./pages/Applayout";
import Aboutus from "./pages/Aboutus";
import Signin from "./pages/Signin";
import AccountDetails from "./pages/AccountDetails";

const router = createBrowserRouter([
  {
    index: true,
    element: <Homepage />,
  },
  {
    path: "/recipes",
    element: <Applayout />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/account",
    element: <AccountDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
