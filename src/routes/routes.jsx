import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from '../pages/Home/Home';
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register.jsx/Register";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import { chefRecipeLoader } from "../loaders/ChefRecipesLoader";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import ErrorElement from "../shared/ErrorElement/ErrorElement";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children:[
      {
        index: true,
        element: <Home />,
        // loader: () => fetch("https://tasty-recipes-server-margubtech-gmailcom.vercel.app/allChefsDetails")
      },
      {
        path: "/chef/:id/recipes",
        element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
        loader: chefRecipeLoader
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
