import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/ui/Home/Home";
import Layout from "./Layout";
import AuthGuard from "./AuthGuard";
import { Login } from "@/pages";
export const publicRoutePaths = ['/login']

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
			{
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
