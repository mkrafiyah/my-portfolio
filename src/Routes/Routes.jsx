import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import AllProjects from "../Pages/AllProjects/AllProjects";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
            children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About>m</About>
        },
        {
            path: '/projects',
            element: <AllProjects></AllProjects>
            
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        }
      ]
    },
  ]);