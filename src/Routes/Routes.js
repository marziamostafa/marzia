import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main";
import AllCards from "../pages/AllCards/AllCards";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {

    }

])

export default router;