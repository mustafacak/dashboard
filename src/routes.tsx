// Component
import HomeLayout from "./pages/home"
import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/login/Login"

const routes = [
    {
       path: "/*",
       element: <HomeLayout />,
       children: [
        {
            path: "dashboard",
            element: <Dashboard />
        }
       ]
    },
    {
        path: "/login",
        element: <Login />
    }
]

export default routes