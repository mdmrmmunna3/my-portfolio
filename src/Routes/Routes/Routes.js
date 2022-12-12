import Main from "../../Layouts/Main";
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
                path: '/contact',
                element: <ContactMe></ContactMe>
            }
        ]
    }
])

export default router;