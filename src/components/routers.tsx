import { useLocation } from "react-router-dom";
import { Aboutme } from "../page/about";
import { Contact } from "../page/contact";
import { Home } from "../page/home";
import { Portfolio } from "../page/portfolio";
import { Service } from "../page/service";
import { CommingSoon } from "../page/wait";
import { useEffect } from "react";
import { Blog } from "../page/blog";

interface IPublicRoutes {
    path: string,
    element: JSX.Element,
    title: string,
    description?: string,
}

const publicRoutes: IPublicRoutes[] = [
    {
        path: "",
        element: <Home />,
        title: "Home"
    },
    {
        path: "home",
        element: <Home />,
        title: "Home"
    },
    {
        path: "about",
        element: <Aboutme />,
        title: "About Me"
    },
    {
        path: "profile",
        element: <Portfolio />,
        title: "Contact"
    },
    {
        path: "contact",
        element: <Contact />,
        title: "Contact"
    },
    {
        path: "project",
        element: <CommingSoon />,
        title: "Project Comming Soon.."
    },
    {
        path: "service",
        element: <Service />,
        title: "Service"
    },
    // {
    //     path: "blog",
    //     element: <Blog />,
    //     title: "Blog"
    // },
    {
        path: "*",
        element: <CommingSoon />,
        title: "Error 404"
    }
]

const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };


export { publicRoutes, ScrollToTop }