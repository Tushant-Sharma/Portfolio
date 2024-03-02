import { Contact } from "../page/contact";
import { Home } from "../page/home";

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
        path: "profile",
        element: <Home />,
        title: "Contact"
    },
    {
        path: "contact",
        element: <Contact />,
        title: "Contact"
    },
    {
        path: "project",
        element: <Home />,
        title: "Project Comming Soon.."
    },
    {
        path: "*",
        element: <Home />,
        title: "Error 404"
    }
]

export { publicRoutes }