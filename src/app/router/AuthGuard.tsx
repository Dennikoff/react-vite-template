import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRoutePaths } from "./router";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const getAuthInfo = (): string => {
    return localStorage["jwt"];
  };

  useEffect(() => {
		console.log(location.pathname)
    const isPublicRoute = publicRoutePaths.includes(location.pathname);
    if (getAuthInfo()) {
      if (isPublicRoute) {
        navigate("/");
      }
    } else {
      if (!isPublicRoute) {
        navigate("/login");
      }
    }
  }, [navigate, location.pathname]);

  return <>{children}</>;
}
