import { createBrowserRouter } from "react-router-dom";
import { Home } from '@/pages/ui/Home/Home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>,
	}
])