import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main";
import AllCards from "../pages/AllCards/AllCards";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('https://jsonplaceholder.typicode.com/users')
                },
                element: <AllCards></AllCards>,
            }
        ]
    }

])

export default router;