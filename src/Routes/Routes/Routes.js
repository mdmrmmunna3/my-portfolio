import Main from "../../Layouts/Main";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Blog from "../../Pages/Blog/Blog";
import { ContactMe } from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Projects from "../../Pages/Home/Projects/Projects";
import Skills from "../../Pages/Skills/Skills";

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
                path: '/projects',
                element: <Projects></Projects>
            },
            
            {
                path: '/contact',
                element: <ContactMe></ContactMe>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/aboutme',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;