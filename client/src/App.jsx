import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Application from "./pages/Application";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import UserProfile from "./pages/UserProfile"
import PrivatAdmin from "./components/PrivatAdmin"
import PrivatUser from "./components/PrivatUser";
import AdminProfile from "./pages/AdminProfile";
import AdminDashbord from "./pages/AdminDashbord";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivatUser />}>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/application" element={<Application />} />
        </Route>
      <Route element={<PrivatAdmin/>}>
        <Route path="/admin-profile" element={<AdminProfile/>}/>
        <Route path="/admin-dashbord" element={<AdminDashbord/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}
