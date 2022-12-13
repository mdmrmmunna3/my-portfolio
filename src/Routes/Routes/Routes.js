import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import { ContactMe } from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <ContactMe></ContactMe>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;