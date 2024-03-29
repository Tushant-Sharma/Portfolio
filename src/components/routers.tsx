import { useLocation } from "react-router-dom";
import React, { lazy, useEffect } from "react";

//pages
// import { Home } from "../page/home";


const Home = lazy(async () => import("../page/home").then(model => ({ default: model.Home })))

const Aboutme = lazy(() => import("../page/about"))
const Contact = lazy(() => import("../page/contact").then(module => ({ default: module.Contact })))
const Blogs = lazy(() => import("../page/blogs").then(module => ({ default: module.Blogs })))
const Service = lazy(() => import("../page/service").then(module => ({ default: module.Service })))
const Blog = lazy(() => import("../page/blog").then(module => ({ default: module.Blog })))
const Portfolio = lazy(() => import("../page/portfolio").then(module => ({ default: module.Portfolio })))

import { CommingSoon } from "../page/wait";
import { Projects } from "../page/project";
import { socialLinks } from "../utils/usefulllink";




const RedirectTo = (props: React.PropsWithChildren<{ href: string }>) => {
    useEffect(() => {
        window.location.href = props.href;
    }, [])
    return (
        <>
            <h1>Redirecting.....</h1>
        </>
    )
}

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
    {
        path: "blog/:title",
        element: <Blog />,
        title: "Blog"
    },
    {
        path: "blogs",
        element: <Blogs />,
        title: "Blog"
    },
    {
        path: "projects",
        element: <Projects />,
        title: "project"
    },
    {
        path: "resume",
        element: <RedirectTo href={socialLinks.resume} />,
        title: "Redirecting to Resume.."
    },
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




