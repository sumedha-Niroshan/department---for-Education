import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";


export default function PrivatRoute() {
  const { role } = useSelector((state) => state.user);
  return role ==="admin"  ? <Outlet /> : <Navigate to="/sign-in" />;
}
