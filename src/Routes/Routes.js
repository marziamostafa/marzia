import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main";
import AllCards from "../pages/AllCards/AllCards";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";

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
                path: '/details/:id',
                loader: async ({ params }) => {

                    return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)

                },
                element: <Details></Details>
            }
        ]
    },

])

export default router;