import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Applayout from "./pages/Applayout";
import Aboutus from "./pages/Aboutus";
import Signin from "./pages/Signin";
import AccountDetails from "./pages/AccountDetails";
import Breakfast from "./recipes/Breakfast";
import SearchRecipes from "./recipes/SearchRecipes";
import Seafood from "./recipes/Seafood";
import Vegan from "./recipes/Vegan";
import Side from "./recipes/Side";
import Dessert from "./recipes/Dessert";
import RecipeDetails from "./recipes/RecipeDetails";

const router = createBrowserRouter([
  {
    index: true,
    element: <Homepage />,
  },
  {
    path: "/recipes",
    element: <Applayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to={"search"} />,
      },
      {
        path: "search",
        element: <SearchRecipes />,
      },
      {
        path: "breakfast",
        element: <Breakfast />,
      },
      {
        path: "seafood",
        element: <Seafood />,
      },
      {
        path: "vegan",
        element: <Vegan />,
      },
      {
        path: "side",
        element: <Side />,
      },
      {
        path: "dessert",
        element: <Dessert />,
      },
      {
        path: ":recipeID",
        element: <RecipeDetails />,
      },
    ],
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
